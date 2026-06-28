import pandas as pd


print("Reading NASA FIRMS data...")

df = pd.read_csv("data/raw/fires/firms_india.csv")

print("Original records:", len(df))

# Keep only confidence >= 70
df = df[df["confidence"] >= 70]

print("High-confidence fires:", len(df))

# Keep required columns
processed = df[
    [
        "latitude",
        "longitude",
        "brightness",
        "confidence",
        "frp",
        "acq_date",
        "satellite",
        "instrument",
    ]
].copy()

processed.rename(
    columns={
        "latitude": "lat",
        "longitude": "lng"
    },
    inplace=True
)

output = "data/fires/india_fires.csv"

processed.to_csv(output, index=False)

print("\nSaved to:", output)
print("\nFirst 5 fires:\n")
print(processed.head())