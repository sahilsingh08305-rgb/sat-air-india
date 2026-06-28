import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from utils.aqi_utils import pm25_aqi, pm10_aqi

print("PM2.5 = 45 ->", pm25_aqi(45))
print("PM10  = 180 ->", pm10_aqi(180))
from utils.aqi_utils import pm25_aqi, pm10_aqi

print("PM2.5 = 45 ->", pm25_aqi(45))
print("PM10  = 180 ->", pm10_aqi(180))