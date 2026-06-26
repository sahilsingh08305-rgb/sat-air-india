import pandas as pd


def get_live_fires():
    df = pd.read_csv("data/fires/india_fires.csv")
    return df.to_dict(orient="records")