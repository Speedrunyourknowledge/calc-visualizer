import plotly.express as px
import plotly.graph_objects as go
from scipy.integrate import quad
import numpy as np
import sys

# safe evaluation of user input function because it only allows predefined variables
#def safe_eval(str):
#  allowed_names = {'sin':np.sin, 'cos', np.cos, 'tan', np.tan, 'log', np.emath.logn, 'ln', np.log}
  # exceptions are thrown so node is aware of errors
#  return eval(str, {'__builtins__':None}, allowed_names)

inputFunc = sys.argv[1]
lowerBound = float(sys.argv[2])
upperBound = float(sys.argv[3])

# try to evaluate input string
#safe_func = safe_eval(inputFunc) 
        
# just change these 3 values
a = lowerBound # insert lower bound
b = upperBound # insert upper bound
func = lambda x: np.log(np.tan(x))

def midpoint_integrate(f, a, b, n):
    h = (b - a) / n
    midpoints = a + h * (np.arange(n) + 0.5)
    return h * np.sum(f(midpoints))

def generate_bars(n_bars):
    width = (b - a) / n_bars
    x_bar = a + width * (np.arange(n_bars) + 0.5) 
    y_bar = func(x_bar)
    return x_bar, y_bar, width

# prevents the final value from being cut off
x_line = np.arange(a, b+.01, 0.01)
y_line = func(x_line)
area, error= quad(func, a, b)

initial_bars = 10
x_bar, y_bar, width = generate_bars(initial_bars)

fig = px.line(x=x_line, y=y_line)

# adds a line at x = 0 if the lower bound is negative
if a < 0:
  fig.add_vline(x=0, line_width=2, line_color="#a5adad")

fig.update_traces(hovertemplate="(%{x:.2f}, %{y:.2f})", name="Function", showlegend=False)

bar_trace = go.Bar(
    x=x_bar,
    y=y_bar,
    width=[width] * len(x_bar),
    opacity=0.65,
    name="Rectangles",
    marker = dict(color=['#31b500' if value > 0 else '#ff3c00' for value in y_bar],
    line=dict(color='black', width=1)),
    hovertemplate="(%{x:.2f}, %{y:.2f})",
    showlegend=False
)
fig.add_trace(bar_trace)

# remove unneeded graphs
fig.layout.template.data = {}
fig.layout.template.data["bar"] =  [{
                                      "marker": {
                                        "line": {
                                          "color": "#E5ECF6",
                                          "width": 0.5
                                        },
                                        "pattern": {
                                          "fillmode": "overlay",
                                          "size": 10,
                                          "solidity": 0.2
                                        }
                                      },
                                      "type": "bar"
                                    }]

# remove unneeded attributes
fig.layout.template.layout.pop('polar', None)
fig.layout.template.layout.pop('ternary', None)
fig.layout.template.layout.pop('coloraxis', None)
fig.layout.template.layout.colorscale.pop('sequentialminus', None)
fig.layout.template.layout.colorscale.pop('diverging', None)


fig.update_layout(title=(
        f'Approx. Area = {np.round(midpoint_integrate(func, a, b, initial_bars), 9)}'
        f'<br>     True Area = {np.round(area, 9)}'), title_font_size=14, title_pad_b=2)

steps = []
for n_bars in range(initial_bars, 101, 5):
    x_bar, y_bar, width = generate_bars(n_bars)
    step = dict(
        method="update",
        args=[
            {"x": [x_line, x_bar], "y": [y_line, y_bar], "width": [None, [width] * len(x_bar)], 
             "marker": dict(color=['#31b500' if value > 0 else '#ff3c00' for value in y_bar],
              line=dict(color='black', width=1))},
             {"title.text":  f'Approx. Area = {np.round(midpoint_integrate(func, a, b, n_bars), 9)}' 
             f'<br>     True Area = {np.round(area, 9)}'}
        ],
        label=f"{n_bars}"
    )
    steps.append(step)

sliders = [dict(
    active=0,
    currentvalue={"prefix": "n = "},
    pad={"t": 30},
    steps=steps
)]

fig.update_layout(
    margin=dict(t=50, r=30, l=60),
    sliders=sliders,
    barmode='overlay',
    xaxis_title="x-axis",
    yaxis_title="y-axis",
    xaxis=dict(range=[a, b], fixedrange=True), 
    yaxis=dict(fixedrange=True),
)

fig_json = fig.to_json(pretty=True)

print(fig_json)

