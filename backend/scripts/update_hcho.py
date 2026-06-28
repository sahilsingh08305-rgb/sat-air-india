import json
import pandas as pd


print("Reading Sentinel-5P HCHO data...")

df = pd.read_csv("data/raw/hcho/india_hcho_raw.csv")

print("Original records:", len(df))


# Extract latitude and longitude from .geo column
def get_lat(geo_str):
    geo = json.loads(geo_str)
    return geo["coordinates"][1]


def get_lng(geo_str):
    geo = json.loads(geo_str)
    return geo["coordinates"][0]


df["lat"] = df[".geo"].apply(get_lat)
df["lng"] = df[".geo"].apply(get_lng)

df["hcho_value"] = (
    df["tropospheric_HCHO_column_number_density"] * 1e6
)


# Severity classification
def get_severity(v):
    if v < 80:
        return "Low"
    elif v < 120:
        return "Moderate"
    else:
        return "High"


df["severity"] = df["hcho_value"].apply(get_severity)


processed = df[
    ["lat", "lng", "hcho_value", "severity"]
]

output = "data/hcho/india_hcho.csv"

processed.to_csv(output, index=False)
# Keep only every 5th point
processed = processed.iloc[::5]

print("\nSaved to:", output)

print("\nFirst 5 rows:\n")
print(processed.head())