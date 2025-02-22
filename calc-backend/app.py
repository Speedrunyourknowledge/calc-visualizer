from flask import Flask
from routes.derivatives import derivatives_bp
from routes.integrals import integrals_bp
from routes.limits import limits_bp
from flask_cors import CORS

# The main flask app

app = Flask(__name__)
CORS(app)

# Register blueprints for modular routing 
# prefix with /api to distinguish from front end routes (will be /api/{whatever-endpoint})
app.register_blueprint(derivatives_bp, url_prefix="/api")
app.register_blueprint(integrals_bp, url_prefix="/api")
app.register_blueprint(limits_bp, url_prefix="/api")

# Running on http://127.0.0.1:5000
if __name__ == '__main__':
    app.run(debug=True)