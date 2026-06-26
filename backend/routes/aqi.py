from flask import Blueprint, jsonify

aqi_bp = Blueprint("aqi", __name__)


@aqi_bp.route("/api/aqi")
def get_aqi():
    return jsonify([
        {
            "state": "Delhi",
            "city": "Delhi",
            "lat": 28.6139,
            "lng": 77.2090,
            "aqi": 400,
            "category": "Very Poor"
        },
        {
            "state": "Maharashtra",
            "city": "Mumbai",
            "lat": 19.0760,
            "lng": 72.8777,
            "aqi": 142,
            "category": "Moderate"
        },
        {
            "state": "Karnataka",
            "city": "Bengaluru",
            "lat": 12.9716,
            "lng": 77.5946,
            "aqi": 78,
            "category": "Satisfactory"
        }
    ])