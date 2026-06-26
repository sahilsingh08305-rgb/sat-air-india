from flask import Blueprint, jsonify

fires_bp = Blueprint("fires", __name__)

@fires_bp.route("/api/fires")
def get_fires():
    return jsonify([
        {"lat": 28.61, "lon": 77.20, "intensity": "High"},
        {"lat": 19.07, "lon": 72.87, "intensity": "Medium"},
        {"lat": 12.97, "lon": 77.59, "intensity": "Low"}
    ])