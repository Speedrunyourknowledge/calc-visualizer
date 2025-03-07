from flask import Blueprint, jsonify, request
import numpy as np
import plotly.graph_objects as go
#from services.derivative_calc import create_graph_data # uncomment to use functions from services

derivatives_bp = Blueprint('derivatives', __name__)

# handle all derivative endpoints here, can specify GET, POST, PUT, DELETE

# to make requests on front end to back end this route will be:
# http://127.0.0.1:5000/api/custom-derivative
@derivatives_bp.route('/custom-derivative', methods=["GET"])
def derivative_graph():
    x = np.linspace(-10, 10, 400)
    y = x ** 2

    x0 = float(request.args.get("x0", 0))

    y_prime = 2 * x0
    y_tangent = y_prime * (x - x0) + (x0 **2)

    fig = go.Figure()
    fig.add_trace(go.Scatter(x=x, y=y, mode='lines', name='y = x^2'))

    fig.add_trace(go.Scatter(x=x, y=y_tangent, mode='lines', name=f"Tangent at x = {x0:.2f}", line=dict(dash='dash')))

    fig.add_trace(go.Scatter(x=[x0], y=[x0**2], mode='markers', name=f"Point at x = {x0:.2f}", marker=dict(color='red', size=10)))


    fig.update_layout(
        title = "Quadratic Function: y = x^2",
        xaxis_title="x",
        yaxis_title="y",
        template="plotly_dark",
        xaxis = dict(range=[-10, 10], fixedrange=True),
        yaxis = dict(range=[0,100], fixedrange=True),
    )
    return jsonify(fig.to_dict())