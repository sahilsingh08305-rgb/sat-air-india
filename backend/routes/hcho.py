from flask import Blueprint, jsonify
from services.hcho_services import get_live_hcho

hcho_bp = Blueprint("hcho", __name__)


@hcho_bp.route("/api/hcho")
def get_hcho():
    return jsonify(get_live_hcho())