from flask import Blueprint, jsonify

fires_bp = Blueprint("fires", __name__)


@fires_bp.route("/api/fires")
def get_fires():
    return jsonify([
        {
            "name": "Delhi Fire Event",
            "intensity": "High",
            "lat": 28.61,
            "lng": 77.20
        },
        {
            "name": "Mumbai Fire Event",
            "intensity": "Medium",
            "lat": 19.07,
            "lng": 72.87
        },
        {
            "name": "Bengaluru Fire Event",
            "intensity": "Low",
            "lat": 12.97,
            "lng": 77.59
        }
    ])