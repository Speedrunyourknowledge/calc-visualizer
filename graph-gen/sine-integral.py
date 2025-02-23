import plotly.express as px
import plotly.graph_objects as go
import numpy as np
from bs4 import BeautifulSoup

x_line = np.arange(1, 5, 0.01)
y_line = np.sin(x_line)

initial_bars = 10

def generate_bars(n_bars):
    x_bar = np.linspace(1, 5, n_bars + 1)[:-1]
    y_bar = np.sin(x_bar)
    width = (5 - 1) / n_bars
    return x_bar, y_bar, width

x_bar, y_bar, width = generate_bars(initial_bars)

fig = px.line(x=x_line, y=y_line)

bar_trace = go.Bar(
    x=x_bar,
    y=y_bar,
    width=[width] * len(x_bar),
    opacity=0.5,
    name="Rectangles"
)
fig.add_trace(bar_trace)

steps = []
for n_bars in range(10, 101, 5):
    x_bar, y_bar, width = generate_bars(n_bars)
    step = dict(
        method="update",
        args=[
            {"x": [x_line, x_bar], "y": [y_line, y_bar], "width": [None, [width] * len(x_bar)]}
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
    xaxis=dict(range=[1, 5], fixedrange=True),
    yaxis=dict(fixedrange=True),
)

# output figure as a div
div_content = fig.to_html(full_html=False, include_plotlyjs=False)

soup = BeautifulSoup(div_content, 'html.parser')

pretty_content = soup.prettify()

f = open("./html-output/graph.txt", "w")
f.write(pretty_content)
f.close()
