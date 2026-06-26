import pandas as pd


def get_live_aqi():
    df = pd.read_csv("data/aqi/india_aqi.csv")
    return df.to_dict(orient="records")