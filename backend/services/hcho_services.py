import pandas as pd


def get_live_hcho():
    df = pd.read_csv("data/hcho/india_hcho.csv")
    return df.to_dict(orient="records")