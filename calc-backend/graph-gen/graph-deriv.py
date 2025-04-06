import numpy as np
import sympy as sp
import plotly.graph_objects as go


x = sp.symbols('x')

#Just change these three
f = sp.sin(x)
y_range = [-2, 2]
x_range = [-10, 10]


f_prime = sp.diff(f, x)
f_y = sp.lambdify(x, f, 'numpy')
f_prime_y = sp.lambdify(x, f_prime, 'numpy')

x_vals = np.arange(x_range[0], x_range[1] + 0.1, 0.1)
f_vals = f_y(x_vals)

fig = go.Figure()
fig.add_trace(go.Scatter(x=x_vals, y=f_vals, mode='lines', name='Function'))

tangent_y = f_prime_y(x_range[0]) * (x_vals - x_range[0]) + f_y(x_range[0])


fig.add_trace(go.Scatter(x=x_vals, y=tangent_y, mode='lines', name='Tangent'))
fig.add_trace(go.Scatter(x=[x_range[0]], y=[f_y(x_range[0])],
                         mode='markers',
                         marker=dict(size=12, color='green'),
                         name='Point'))

fig.update_layout(title=(f"Slope Value = {f_prime_y(x_range[0]):.2f}"))

frames = []
for slider_val in x_vals:
    tangent_y = f_prime_y(slider_val) * (x_vals - slider_val) + f_y(slider_val)
    frames.append(go.Frame(
        data=[
            go.Scatter(),
            go.Scatter(x=x_vals, y=tangent_y),
            go.Scatter(x=[slider_val], y=[f_y(slider_val)])
        ],
        layout=go.Layout(title={'text': f"Slope Value = {f_prime_y(slider_val):.2f}"}),
        name=str(slider_val)
    ))
fig.frames = frames


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
    y= -0.05,
    len=1.0
)]

fig.update_layout(
    xaxis_title='x-axis',
    yaxis_title='y-axis',
    xaxis=dict(range=[x_range[0], x_range[1]]),
    yaxis=dict(range=[y_range[0], y_range[1]]),
    sliders=sliders,
    uirevision='static'
)

fig.show()
