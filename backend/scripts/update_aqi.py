import pandas as pd
from datetime import datetime
import sys
import os

sys.path.insert(
    0,
    os.path.abspath(
        os.path.join(os.path.dirname(__file__), "..")
    )
)

from utils.aqi_utils import *


def get_category(aqi):
    if aqi <= 50:
        return "Good"
    elif aqi <= 100:
        return "Satisfactory"
    elif aqi <= 200:
        return "Moderate"
    elif aqi <= 300:
        return "Poor"
    elif aqi <= 400:
        return "Very Poor"
    else:
        return "Severe"


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

    return round(max(sub_indices), 2)


print("Reading CPCB data...")

df = pd.read_csv("data/raw/aqi/cpcb_latest.csv")

print("Calculating station AQI...")

pivot_df = df.pivot_table(
    index=["state", "city", "station"],
    columns="pollutant_id",
    values="pollutant_avg"
).reset_index()

pivot_df["aqi"] = pivot_df.apply(
    calculate_station_aqi,
    axis=1
)

print("Calculating state AQI...")

state_df = (
    pivot_df.groupby("state")["aqi"]
    .mean()
    .round()
    .reset_index()
)

state_df["category"] = state_df["aqi"].apply(get_category)

state_df["last_updated"] = datetime.now().strftime("%Y-%m-%d")

output_path = "data/aqi/india_aqi.csv"

state_df.to_csv(output_path, index=False)

print("\n===== FIRST 10 STATES =====\n")

print(state_df.head(10))

print("\nTotal states:", len(state_df))

print(f"\nSaved to: {output_path}")