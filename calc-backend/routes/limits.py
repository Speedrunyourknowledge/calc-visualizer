from flask import Blueprint
#from services.limits_calc import {functionName} # uncomment to use functions from services


limits_bp = Blueprint('limits', __name__)

# handle all limit endpoints here, can specify GET, POST, PUT, DELETE

# to make requests on front end to back end this route will be:
# http://127.0.0.1:5000/api/custom-limit
@limits_bp.route('/custom-limit', methods=["GET"])
def derivative_graph():
    return "custom limit graph"