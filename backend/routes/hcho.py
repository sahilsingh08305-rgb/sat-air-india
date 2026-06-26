from flask import Blueprint, jsonify
from services.hcho_services import get_live_hcho

hcho_bp = Blueprint("hcho", __name__)


@hcho_bp.route("/api/hcho")
def get_hcho():
    return jsonify(get_live_hcho())
    return jsonify([
        {
            "city": "Delhi",
            "lat": 28.6139,
            "lng": 77.2090,
            "hcho_value": 2.8,
            "severity": "High"
        },
        {
            "city": "Mumbai",
            "lat": 19.0760,
            "lng": 72.8777,
            "hcho_value": 1.9,
            "severity": "Medium"
        },
        {
            "city": "Bengaluru",
            "lat": 12.9716,
            "lng": 77.5946,
            "hcho_value": 1.1,
            "severity": "Low"
        }
    ])
