import sys
import os

sys.path.insert(
    0,
    os.path.abspath(
        os.path.join(os.path.dirname(__file__), "..")
    )
)

import pandas as pd

from utils.aqi_utils import *


df = pd.read_csv("data/raw/aqi/cpcb_latest.csv")

# Convert rows into columns
pivot_df = df.pivot_table(
    index=["state", "city", "station"],
    columns="pollutant_id",
    values="pollutant_avg"
).reset_index()


def calculate_station_aqi(row):

    sub_indices = []

    if pd.notna(row.get("PM2.5")):
        sub_indices.append(pm25_aqi(row["PM2.5"]))

    if pd.notna(row.get("PM10")):
        sub_indices.append(pm10_aqi(row["PM10"]))

    if pd.notna(row.get("NO2")):
        sub_indices.append(no2_aqi(row["NO2"]))

    if pd.notna(row.get("SO2")):
        sub_indices.append(so2_aqi(row["SO2"]))

    if pd.notna(row.get("CO")):
        sub_indices.append(co_aqi(row["CO"]))

    if pd.notna(row.get("OZONE")):
        sub_indices.append(ozone_aqi(row["OZONE"]))

    if pd.notna(row.get("NH3")):
        sub_indices.append(nh3_aqi(row["NH3"]))

   return cap_aqi(max(sub_indices))


pivot_df["aqi"] = pivot_df.apply(
    calculate_station_aqi,
    axis=1
)

print("\n===== FIRST 10 STATIONS =====\n")

print(
    pivot_df[
        ["state", "city", "station", "aqi"]
    ].head(10)
)

print("\nTotal stations:", len(pivot_df))
