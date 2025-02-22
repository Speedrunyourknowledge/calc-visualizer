from flask import Blueprint
#from services.derivative_calc import {functionName} # uncomment to use functions from services

derivatives_bp = Blueprint('derivatives', __name__)

# handle all derivative endpoints here, can specify GET, POST, PUT, DELETE

# to make requests on front end to back end this route will be:
# http://127.0.0.1:5000/api/custom-derivative
@derivatives_bp.route('/custom-derivative', methods=["GET"])
def derivative_graph():
    return "custom derivative graph"