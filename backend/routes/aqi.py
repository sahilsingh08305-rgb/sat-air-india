from services.aqi_services import get_live_aqi
from flask import Blueprint, jsonify

aqi_bp = Blueprint("aqi", __name__)


@aqi_bp.route("/api/aqi")
def get_aqi():
    return jsonify(get_live_aqi())