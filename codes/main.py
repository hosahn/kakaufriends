import generate_database
import utils
import tree_related
import generate_description_feature
import numpy as np

if __name__ == '__main__':
    num_cluster = 10
    num_est = 20

    platforms = ['netflix', 'disney', 'amazon']
    file_prefix = "../dataset"
    df = generate_database.read_csv_files(file_prefix, platforms)
    # kmeans, tfidfv_tokens = generate_description_feature.gen_feature(df, num_cluster)
    kmeans, tfidfv_tokens = generate_description_feature.generate_description_feature_from_file()
    header = utils.gen_header(df, num_cluster)

    tree_input = utils.one_hot_encode(df, num_cluster, kmeans.labels_)

    # First setting for the user
    I_like = [(0, 1950, False), (1, 60, False), (utils.get_header_index(header, 'animation'), None, None)]
    I_hate = [(0, 2020, True), (1, 120, True), (utils.get_header_index(header, 'crime'), None, None)]
    forbiden_tags = [(0, 2022, True), (utils.get_header_index(header, 'R'), None, None)]
    labels = utils.label_based_on_user(tree_input, I_like, I_hate, forbiden_tags)

    trained_result = tree_related.train_tree(num_est, tree_input, labels)
    
    top_features = np.argsort(trained_result.base_estimator_.feature_importances_[::-1])
    top_features_header = set()
    # generate two base clusters for the user
    clustering_result = tree_related.get_new_cluster(trained_result, tree_input, labels, top_N=2)
    cluster_headers = set()
    for feat, thre, big, tmp in clustering_result:
        print('\ncluster should be ', end='')
        for i in range(len(feat)):
            if feat[i] < 2:
                if big[i]:
                    sent = f'{header[feat[i]]} bigger than {thre[i]}'
                else:
                    sent = f'{header[feat[i]]} smaller than {thre[i]}'
            elif 'desc' not in header[feat[i]]:
                if big[i]:
                    sent = f'{header[feat[i]]}'
                else:
                    sent = f'not {header[feat[i]]}'
            else:
                hid = int(header[feat[i]][4:])
                sent = f'related to ' + ', '.join(tfidfv_tokens[np.argpartition(kmeans.cluster_centers_, axis=1, kth=-4)[:, -4:]][hid].tolist())
            cluster_headers.add(feat[i])
            print(f'{sent} and ', end='')
        print('')
        print(df['title'].iloc[tmp])
    for h in top_features:
        if h in cluster_headers:
            top_features_header.add(header[h])
        if len(top_features_header) == 3:
            break
    for h in top_features:
        if len(top_features_header) >= 3:
            break
        top_features_header.add(header[h])
    top_features_header = list(top_features_header)
    for f in range(len(top_features_header)):
        if 'desc' in top_features_header[f]:
            hid = int(top_features_header[f][4:])
            top_features_header[f] = '+'.join(tfidfv_tokens[np.argpartition(kmeans.cluster_centers_, axis=1, kth=-4)[:, -4:]][hid])
    print(top_features_header)
    