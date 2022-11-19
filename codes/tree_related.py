from sklearn.semi_supervised import SelfTrainingClassifier
from sklearn.ensemble import RandomForestClassifier
import pickle
import numpy as np
from sklearn import tree

def train_tree(num_est, tree_in, labels):
  randomforest = RandomForestClassifier(n_estimators=num_est, max_depth=10)
  self_training = SelfTrainingClassifier(randomforest)
  self_training = self_training.fit(tree_in, labels)
  return self_training

def save_tree(tree):
  with open('tree.bin', 'wb') as f:
    pickle.dump(tree, f)

def save_tree_as_png(self_training):
  import matplotlib.pyplot as plt
  for i in range(10):
    tree.plot_tree(self_training.base_estimator_.estimators_[i])
    plt.savefig(f'tree{i}.png')

def get_base_cluster(self_training, tree_in, labels, top_N=1):
  recommend = tree_in[np.where(labels == 1)]
  num = max(15, len(recommend))
  sample = recommend[np.random.choice(recommend.shape[0], num)]
  return get_explanation_of_selection(sample, self_training, top_N)

def get_new_cluster(self_training, tree_in, labels, top_N=1):
  min_impu = get_base_cluster(self_training, tree_in, labels, top_N)
  est_idxs = np.where((self_training.transduction_ == 1) & (labels == -1))
  est = tree_in[est_idxs]
  clusters = []
  for _, feat, thre, big, target_id, n in min_impu:
    clf = self_training.base_estimator_.estimators_[n]
    node_indicator = clf.decision_path(est)
    tmp = []
    for sample_id in range(est.shape[0]):
      node_index = node_indicator.indices[node_indicator.indptr[sample_id] : node_indicator.indptr[sample_id + 1]]
      if target_id in node_index:
        tmp.append(est_idxs[0][sample_id])
    clusters.append((feat, thre, big, tmp))
  return clusters


def get_explanation_of_selection(selection, self_training, top_N=1):
  min_impu = [(10, 0, 0, 0, -1, -1) for i in range(top_N)] # 0 for smaller or equal, 1 for bigger
  for n in range(len(self_training.base_estimator_.estimators_)):
    clf = self_training.base_estimator_.estimators_[n]
    feature = np.asarray(clf.tree_.feature)
    threshold = np.asarray(clf.tree_.threshold)
    impurity = clf.tree_.impurity

    node_indicator = clf.decision_path(selection)
    prev_info = set()
    not_right = False
    for sample_id in range(selection.shape[0]):
      node_index = node_indicator.indices[node_indicator.indptr[sample_id] : node_indicator.indptr[sample_id + 1]]
      if sample_id == 0:
        prev_info = set(node_index)
      else:
        prev_info = set(node_index).intersection(prev_info)
      
      if len(prev_info) < 2:
        not_right = True
        break

    if not not_right:
      prev_info.remove(max(prev_info))
      target_id = max(prev_info)
      impu = impurity[target_id] + len(prev_info) * 0.075
      if min_impu[-1][0] > impu:
        prev_info = np.asarray(list(prev_info), np.uint8)
        min_impu[-1] = (impu, feature[prev_info], threshold[prev_info], selection[sample_id, feature[prev_info]] > threshold[prev_info], target_id, n)
        min_impu = sorted(min_impu, key=lambda tup: tup[0])

  return min_impu