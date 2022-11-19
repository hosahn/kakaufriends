from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
import pandas as pd
import pickle

def gen_feature(df, N_desc_cluster):
    tfidfv = TfidfVectorizer(stop_words='english', max_df=5000, min_df=10)
    tfidfv_wm = tfidfv.fit_transform(df['description'])
    tfidfv_tokens = tfidfv.get_feature_names_out()
    kmeans = KMeans(n_clusters=N_desc_cluster, max_iter=10).fit(tfidfv_wm)
    with open("kmean.bin", "wb") as f:
        pickle.dump(kmeans, f)
    with open("tfidfv_tokens.bin", "wb") as f:
        pickle.dump(tfidfv_tokens, f)
    return kmeans, tfidfv_tokens

def generate_description_feature_from_file():
    with open("kmean.bin", "rb") as f:
        kmeans = pickle.load(f)
    with open("tfidfv_tokens.bin", "rb") as f:
        tfidfv_tokens = pickle.load(f)
    return kmeans, tfidfv_tokens