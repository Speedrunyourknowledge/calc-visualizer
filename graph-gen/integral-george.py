import plotly.express as px
import plotly.graph_objects as go
import numpy as np
from bs4 import BeautifulSoup

# pi
pi = np.pi

# endpoints
a = 0
b = 2*pi

x_line = np.arange(0, 2*pi + pi/30, pi/30)
y_line = np.sin(x_line)

initial_bars = 10

def midpoint_integrate(f, a, b, n):
    h = (b - a) / n
    midpoints = a + h * (np.arange(n) + 0.5)
    return h * np.sum(f(midpoints))

def generate_bars(n_bars):
    x_bar = np.linspace(a, b, n_bars + 1)[:-1]
    y_bar = np.sin(x_bar)
    width = (b - a) / n_bars
    return x_bar, y_bar, width

x_bar, y_bar, width = generate_bars(initial_bars)

fig = px.line(x=x_line, y=y_line)

fig.update_traces(hovertemplate="(%{x:.2f}, %{y:.2f})", name="Function", showlegend=True)

bar_trace = go.Bar(
    x=x_bar,
    y=y_bar,
    width=[width] * len(x_bar),
    opacity=0.5,
    name="Rectangles",
    marker = dict(color=['green' if value > 0 else 'red' for value in y_bar]),
    hovertemplate="(%{x:.2f}, %{y:.2f})",
)
fig.add_trace(bar_trace)

steps = []
for n_bars in range(5, 101, 5):
    x_bar, y_bar, width = generate_bars(n_bars)
    step = dict(
        method="update",
        args=[
            {"x": [x_line, x_bar], "y": [y_line, y_bar], "width": [None, [width] * len(x_bar)], 
             "marker": dict(color=['green' if value > 0 else 'red' for value in y_bar])},
             {"title.text":  f'Approx. Area = {round(midpoint_integrate(np.sin, 0, 5, n_bars), 12)}' 
            f'<br>     True Area = 0.716337814537'}
        ],
        label=f"{n_bars}"
    )
    steps.append(step)

sliders = [dict(
    active=0,
    currentvalue={"prefix": "n = "},
    pad={"t": 50},
    steps=steps
)]

fig.update_layout(
    sliders=sliders,
    barmode='overlay',
    xaxis_title="X-axis",
    yaxis_title="Y-axis",
    title="Sin(x)",
    xaxis=dict(
        tickmode = 'array',
        tickvals = [0, pi/4, pi/2, 3*pi/4, pi, 5*pi/4, 3*pi/2, 7*pi/4, 2*pi],
        ticktext = ['0','&#x3C0;/4','&#x3C0;/2','3&#x3C0;/4', '&#x3C0;', '5&#x3C0;/4', '3&#x3C0;/2', '7&#x3C0;/4', '2&#x3C0;'],
        fixedrange=True
        ), 
    yaxis=dict(fixedrange=True),
    modebar_remove=['select2d', 'toImage', 'lasso2d']
)

fig.update_xaxes(minallowed=0)

# output figure as a div
div_content = fig.to_html(full_html=False, include_plotlyjs=False)

soup = BeautifulSoup(div_content, 'html.parser')

pretty_content = soup.prettify()

f = open("./html-output/graph.txt", "w")
f.write(pretty_content)
f.close()