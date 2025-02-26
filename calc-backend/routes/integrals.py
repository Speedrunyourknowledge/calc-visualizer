from flask import Blueprint
#from services.integral_calc import {functionName} # uncomment to use functions from services

integrals_bp = Blueprint('integrals', __name__)

# handle all integral endpoints here, can specify GET, POST, PUT, DELETE

# to make requests on front end to back end this route will be:
# http://127.0.0.1:5000/api/custom-integral
@integrals_bp.route('/custom-integral', methods=["GET"])
def derivative_graph():
    return "custom integral graph"