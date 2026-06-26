from flask import Blueprint, jsonify
from services.fire_services import get_live_fires

fires_bp = Blueprint("fires", __name__)


@fires_bp.route("/api/fires")
def get_fires():
    return jsonify(get_live_fires())