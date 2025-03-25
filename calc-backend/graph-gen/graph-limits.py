import plotly.graph_objects as go
import plotly.express as px
import numpy as np

# Function: f(x) = 2x
def func(x):
    return 2 * x

# Full function line
x_vals = np.linspace(0, 10, 300)
y_vals = func(x_vals)

# Target x for the limit
limit_x = 5
limit_y = func(limit_x)

# Number of steps for the slider and starting points
num_steps = 20
x_left_start = 0
x_right_start = 10

# Create base figure with the line
fig = go.Figure()
fig.add_trace(go.Scatter(x=x_vals, y=y_vals, mode="lines", name="f(x) = 2x"))

# Arrow markers – will be updated with the slider
left_arrow_trace = go.Scatter(
    x=[0], y=[0],
    mode="markers",
    marker=dict(symbol='triangle-right', size=14, color="black"),
    name="Left Arrow"
)

right_arrow_trace = go.Scatter(
    x=[10], y=[20],
    mode="markers",
    marker=dict(symbol='triangle-left', size=14, color="gold"),
    name="Right Arrow"
)

fig.add_trace(left_arrow_trace)
fig.add_trace(right_arrow_trace)

# Create slider steps
steps = []
for i in range(num_steps):
    left_x = np.interp(i, [0, num_steps - 1], [x_left_start, limit_x - 0.1])
    right_x = np.interp(i, [0, num_steps - 1], [x_right_start, limit_x + 0.1])
    
    left_y = func(left_x)
    right_y = func(right_x)

    step = dict(
        method="restyle",
        args=[
            {"x": [[left_x], [right_x]], "y": [[left_y], [right_y]]},
            [1, 2]
        ],
        label=f"Step {i+1}"
    )
    steps.append(step)

# Add slider
fig.update_layout(
    sliders=[{
        "active": 0,
        "steps": steps,
        "currentvalue": {"prefix": "Step: "},
        "pad": {"t": 30}
    }],
    title="Limit of f(x) = 2x as x → 5",
    xaxis_title="x",
    yaxis_title="f(x)",
    xaxis=dict(range=[0, 10], fixedrange=True),
    yaxis=dict(range=[0, 20], fixedrange=True),
    showlegend=True
)

# Save to HTML for testing
fig.write_html("plot.html")
