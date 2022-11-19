import numpy as np

def gen_genres_list(df):
    genre_set = set()
    for d in df['genres']:
        genre_set = genre_set.union(set(d))
    return list(genre_set)

def gen_age_list(df):
    age_set = set()
    for d in df['age_certification']:
        age_set.add(d)
    return list(age_set)

def one_hot_encode(df, N_desc_cluster, desc_labels):
    age_list = gen_age_list(df)
    genre_list = gen_genres_list(df)
    tot_feature = N_desc_cluster + len(genre_list) + len(age_list) + 2
    tree_in = np.zeros((df.shape[0], tot_feature))
    tree_in[:, 0] = df['release_year']
    tree_in[:, 1] = df['runtime']
    for idx in range(len(age_list)):
        tree_in[:, 2+idx] = df['age_certification'].apply(lambda x: age_list[idx] in x)
    for idx in range(len(genre_list)):
        tree_in[:, 2+len(age_list)+idx] = df['genres'].apply(lambda x: genre_list[idx] in x)
    for idx in range(N_desc_cluster):
        tree_in[:, 2+len(age_list)+len(genre_list)+idx] = (idx == desc_labels)

    return tree_in

def gen_header(df, N_desc_cluster):
    header = ['release_year', 'runtime']
    header.extend(gen_age_list(df))
    header.extend(gen_genres_list(df))
    header.extend([f'desc{i}' for i in range(N_desc_cluster)])

    return header

def get_header_index(header, name):
    return header.index(name)

# ex) user_like: [(0, 1920, False), (3, NULL, NULL)]
def label_based_on_user(tree_in, user_like, user_hate, forbiden_tags):
    like_index = set(range(tree_in.shape[0]))
    for feat, threa, big in user_like:
        if feat < 2:
            if big:
                like_index = like_index.intersection(set(np.where(tree_in[:, feat] > threa )[0].tolist()))
            else:
                like_index = like_index.intersection(set(np.where(tree_in[:, feat] <= threa )[0].tolist()))
        else:
            like_index = like_index.intersection(set(np.where(tree_in[:, feat].astype(int) == 1)[0].tolist()))
    hate_index = set(range(tree_in.shape[0]))
    for feat, threa, big in user_hate:
        if feat < 2:
            if big:
                hate_index = hate_index.intersection(set(np.where(tree_in[:, feat] > threa )[0].tolist()))
            else:
                hate_index = hate_index.intersection(set(np.where(tree_in[:, feat] <= threa )[0].tolist()))
        else:
            hate_index = hate_index.intersection(set(np.where(tree_in[:, feat].astype(int) == 1)[0].tolist()))

    for feat, threa, big in forbiden_tags:
        if feat < 2:
            if big:
                hate_index = hate_index.union(set(np.where(tree_in[:, feat] > threa )[0].tolist()))
            else:
                hate_index = hate_index.union(set(np.where(tree_in[:, feat] <= threa )[0].tolist()))
        else:
            hate_index = hate_index.union(set(np.where(tree_in[:, feat].astype(int) == 1)[0].tolist()))

    labels = np.ones(tree_in.shape[0]) * -1
    labels[list(like_index)] = 1
    labels[list(hate_index)] = 0
    return labels
