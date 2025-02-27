from flask import Blueprint, jsonify
import numpy as np
import plotly.graph_objects as go
#from services.derivative_calc import {functionName} # uncomment to use functions from services

derivatives_bp = Blueprint('derivatives', __name__)

# handle all derivative endpoints here, can specify GET, POST, PUT, DELETE

# to make requests on front end to back end this route will be:
# http://127.0.0.1:5000/api/custom-derivative
@derivatives_bp.route('/custom-derivative', methods=["GET"])
def derivative_graph():
    x = np.linspace(-10, 10, 400)
    y = x ** 2

    fig = go.Figure()
    fig.add_trace(go.Scatter(x=x, y=y, mode='lines', name='y = x^2'))

    fig.update_layout(
        title = "Quadratic Function: y = x^2",
        xaxis_title="x",
        yaxis_title="y",
        template="plotly_white",
    )
    return jsonify(fig.to_json())