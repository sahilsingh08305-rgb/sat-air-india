import pandas as pd


def get_live_fires():
    df = pd.read_csv("data/fires/india_fires.csv")

    # Standardize column names for frontend compatibility
    df = df.rename(
        columns={
            "latitude": "lat",
            "longitude": "lng"
        }
    )

    return df.to_dict(orient="records")