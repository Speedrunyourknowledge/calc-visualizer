import numpy as np
import plotly.graph_objects as go
import sys
from plusminus import BaseArithmeticParser

class NumpyArithmeticParser(BaseArithmeticParser):
  def customize(self):

    super().customize()

    self.add_function('sin', 1, np.sin)
    self.add_function('cos', 1, np.cos)
    self.add_function('tan', 1, np.tan)
    self.add_function('log', 2, np.emath.logn)
    self.add_function('ln', 1, np.log)

    self.add_operator("**", 2, BaseArithmeticParser.LEFT, lambda a, b: a ** b)


parser = NumpyArithmeticParser()

input_func = sys.argv[1]
lower_bound = float(sys.argv[2])
upper_bound = float(sys.argv[3])

# parses a string representing a function
def insert_x(x):
  parser['x'] = x
  parser['e'] = np.e
  return parser.evaluate(input_func)

# User-defined function: change this lambda expression to whatever function f(x) you wish.
f = insert_x
x_range = [lower_bound, upper_bound]

# A function to compute the derivative using the central difference method.
def derivative(func, x, h=1e-5):
    return (func(x + h) - func(x - h)) / (2 * h)

# Create an array of x values and evaluate f(x) for these values.
x_vals = np.arange(x_range[0], x_range[1] + 0.05, 0.05)
f_vals = f(x_vals)

# Initialize the Plotly figure and plot the original function.
fig = go.Figure()
fig.add_trace(go.Scatter(x=x_vals, y=f_vals, mode='lines', name='Function'))

# Calculate the tangent line at the starting point x_range[0].
x0 = x_range[0]
tangent_y = derivative(f, x0) * (x_vals - x0) + f(x0)
fig.add_trace(go.Scatter(x=x_vals, y=tangent_y, mode='lines', name='Tangent'))

# Add a marker for the point of tangency.
fig.add_trace(go.Scatter(x=[x0], y=[f(x0)],
                         mode='markers',
                         marker=dict(size=12, color='green'),
                         name='Point'))

# Set the initial layout title with the slope at the starting point.
fig.update_layout(title=f"Slope Value = {derivative(f, x0):.2f}")

# Create frames for the animation slider.
frames = []
for slider_val in x_vals:
    # Compute the tangent line at each slider value using our numerical derivative.
    tan_y = derivative(f, slider_val) * (x_vals - slider_val) + f(slider_val)
    frames.append(go.Frame(
        data=[
            go.Scatter(),  # Placeholder for the function trace (remains unchanged).
            go.Scatter(x=x_vals, y=tan_y),  # Tangent line.
            go.Scatter(x=[slider_val], y=[f(slider_val)])  # Point of tangency.
        ],
        layout=go.Layout(title={'text': f"Slope Value = {derivative(f, slider_val):.2f}"}),
        name=str(slider_val)
    ))
fig.frames = frames

# Create a slider to control the animation.
sliders = [dict(
    currentvalue={"visible": False},
    steps=[
        dict(
            method='animate',
            args=[
                [frame.name],
                dict(mode='immediate',
                     frame=dict(duration=50, redraw=True),
                     transition=dict(duration=0))
            ],
            label=str(int(round(float(frame.name)))) 
                  if abs(float(frame.name) - round(float(frame.name))) < 1e-6 
                  else ""
        )
        for frame in frames
    ],
    transition=dict(duration=0),
    y=-0.05,
    len=1.0
)]

# Adjust padding and final layout settings.
pad = max(np.abs(np.min(f_vals)), np.abs(np.max(f_vals))) // 10
fig.update_layout(
    xaxis_title='x-axis',
    yaxis_title='y-axis',
    xaxis=dict(range=[x_range[0], x_range[1]], fixedrange=True),
    yaxis=dict(range=[np.min(f_vals) - pad, np.max(f_vals) + pad], fixedrange=True),
    sliders=sliders,
    uirevision='static'
)

fig_json = fig.to_json(pretty=True)

print(fig_json)