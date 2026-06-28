import sys
import os

sys.path.insert(
    0,
    os.path.abspath(
        os.path.join(os.path.dirname(__file__), "..")
    )
)

from utils.aqi_utils import *

print("PM2.5 :", pm25_aqi(45))
print("PM10  :", pm10_aqi(180))
print("NO2   :", no2_aqi(90))
print("SO2   :", so2_aqi(100))
print("CO    :", co_aqi(5))
print("OZONE :", ozone_aqi(120))
print("NH3   :", nh3_aqi(300))