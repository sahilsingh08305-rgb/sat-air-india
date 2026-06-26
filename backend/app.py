from flask import Flask
from flask_cors import CORS

from routes.aqi import aqi_bp
from routes.hcho import hcho_bp
from routes.fires import fires_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(aqi_bp)
app.register_blueprint(hcho_bp)
app.register_blueprint(fires_bp)

@app.route("/")
def home():
    return {
        "project": "Satellite AQI & HCHO India",
        "team": "ISRO Hackathon 2026",
        "status": "Backend Running"
    }

@app.route("/api/health")
def health():
    return {
        "status": "healthy",
        "message": "Flask backend is working!"
    }

if __name__ == "__main__":
    app.run(debug=True, port=5000)