import pandas as pd
import nltk
import numpy as np

# nltk.download('words')

words = set(nltk.corpus.words.words())

def filter_english(sent):
    return " ".join(w for w in nltk.wordpunct_tokenize(sent) if w.lower() in words)

def gen_list(g):
    return str(g[1:-1]).replace("'", '').replace(' ', '').split(",")

def read_csv_files(file_prefix, platforms):
    # read all csv files given as platforms
    dfs = []
    for p in platforms:
        data = pd.read_csv(f"{file_prefix}/{p}.csv", usecols=['title', 'description', 'release_year', 'age_certification', 'runtime', 'genres'])
        dfs.append(data)

    df = pd.concat(dfs, ignore_index=True)

    df.dropna(subset=['title', 'description'], inplace=True)
    df.drop(df[df['genres'] == '[]'].index, inplace=True)

    df['age_certification'].fillna('N', inplace=True)
    df['description'] = df['description'].apply(filter_english)
    df['genres'] = df['genres'].apply(gen_list)

    return df
