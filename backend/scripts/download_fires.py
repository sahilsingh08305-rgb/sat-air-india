import pandas as pd

# Temporary demo dataset
fires = [
    {
        "state": "Punjab",
        "city": "Ludhiana",
        "lat": 30.90,
        "lng": 75.85,
        "brightness": 340,
        "confidence": 95,
    },
    {
        "state": "Delhi",
        "city": "Delhi",
        "lat": 28.61,
        "lng": 77.20,
        "brightness": 355,
        "confidence": 98,
    },
    {
        "state": "Maharashtra",
        "city": "Nagpur",
        "lat": 21.14,
        "lng": 79.08,
        "brightness": 330,
        "confidence": 90,
    }
]

df = pd.DataFrame(fires)

output = "data/fires/india_fires.csv"

df.to_csv(output, index=False)

print("Fire data saved to:", output)
print(df)