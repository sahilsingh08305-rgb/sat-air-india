from flask import Blueprint, jsonify

aqi_bp = Blueprint("aqi", __name__)


@aqi_bp.route("/api/aqi")
def get_aqi():
    return jsonify([
        {"state": "Delhi", "aqi": 285, "category": "Very Poor"},
        {"state": "Maharashtra", "aqi": 142, "category": "Moderate"},
        {"state": "Karnataka", "aqi": 78, "category": "Satisfactory"}
    ])