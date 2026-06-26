from flask import Blueprint, jsonify

hcho_bp = Blueprint("hcho", __name__)

@hcho_bp.route("/api/hcho")
def get_hcho():
    return jsonify([
        {"city": "Delhi", "hcho_value": 2.8, "severity": "High"},
        {"city": "Mumbai", "hcho_value": 1.9, "severity": "Medium"},
        {"city": "Bengaluru", "hcho_value": 1.1, "severity": "Low"}
    ])