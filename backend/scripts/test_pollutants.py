import pandas as pd

df = pd.read_csv("data/raw/aqi/cpcb_latest.csv")

print("Available pollutants:")
print(sorted(df["pollutant_id"].unique()))

print("\nCount per pollutant:")
print(df["pollutant_id"].value_counts())

print("\nStations:")
print(df["station"].nunique())

print("\nStates:")
print(df["state"].nunique())