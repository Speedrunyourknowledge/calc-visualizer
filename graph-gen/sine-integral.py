import plotly.express as px
import plotly.graph_objects as go
from scipy.integrate import quad
import numpy as np
from bs4 import BeautifulSoup

# just change these 3 values
a = 0
b = 5
func = lambda x: np.sin(x)


def midpoint_integrate(f, a, b, n):
    h = (b - a) / n
    midpoints = a + h * (np.arange(n) + 0.5)
    return h * np.sum(f(midpoints))

def generate_bars(n_bars):
    width = (b - a) / n_bars
    x_bar = a + width * (np.arange(n_bars) + 0.5) 
    y_bar = func(x_bar)
    return x_bar, y_bar, width


x_line = np.arange(a, b, 0.01)
y_line = func(x_line)
area, error= quad(func, a, b)

initial_bars = 10
x_bar, y_bar, width = generate_bars(initial_bars)

fig = px.line(x=x_line, y=y_line)

fig.update_traces(hovertemplate="(%{x:.2f}, %{y:.2f})", name="Function", showlegend=True)

bar_trace = go.Bar(
    x=x_bar,
    y=y_bar,
    width=[width] * len(x_bar),
    opacity=0.6,
    name="Rectangles",
    marker = dict(color=['#31b500' if value > 0 else '#ff3c00' for value in y_bar]),
    hovertemplate="(%{x:.2f}, %{y:.2f})",
)
fig.add_trace(bar_trace)

fig.update_layout(title=(
        f'Approx. Area = {round(midpoint_integrate(func, a, b, initial_bars), 9)}'
        f'<br>     True Area = {round(area, 9)}'
))

fig.update_layout(title_font_size=14, title_pad_b=2)

steps = []
for n_bars in range(initial_bars, 101, 5):
    x_bar, y_bar, width = generate_bars(n_bars)
    step = dict(
        method="update",
        args=[
            {"x": [x_line, x_bar], "y": [y_line, y_bar], "width": [None, [width] * len(x_bar)], 
             "marker": dict(color=['#31b500' if value > 0 else '#ff3c00' for value in y_bar])},
             {"title.text":  f'Approx. Area = {round(midpoint_integrate(func, a, b, n_bars), 9)}' 
             f'<br>     True Area = {round(area, 9)}'}
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
    sliders=sliders,
    barmode='overlay',
    xaxis_title="x-axis",
    yaxis_title="y-axis",
    xaxis=dict(range=[a, b], fixedrange=True),
    yaxis=dict(fixedrange=True),
)

div_content = fig.to_html(full_html=False, include_plotlyjs=False, config={
    'scrollZoom': False,
    'displayModeBar': False,
    'doubleClick': False,
    'editable': False,
    'staticPlot': False
})

soup = BeautifulSoup(div_content, 'html.parser')

pretty_content = soup.prettify()

# change text to valid python syntax
pretty_content = pretty_content.replace('null', 'None') \
                               .replace('true', 'True') \
                               .replace('false', 'False')

f = open("graph.txt", "w")
f.write(pretty_content)
f.close()
