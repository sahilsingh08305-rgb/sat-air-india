import pandas as pd


def get_live_hcho():
    df = pd.read_csv("data/hcho/india_hcho.csv")

    # Sirf mainland India ke points rakho
    df = df[
        (df["lat"] >= 8) &
        (df["lat"] <= 37) &
        (df["lng"] >= 68) &
        (df["lng"] <= 97)
    ]

    # Performance ke liye
    df = df.head(50)

    # Invalid coordinates hata do
    df = df.dropna(subset=["lat", "lng"])

    return df.to_dict(orient="records")