import plotly.graph_objects as go
import numpy as np

# === USER DEFINES ONLY THESE TWO ===
func    = lambda x: np.log(x)  # ← your function
limit_x = 2                   # ← point to approach

# === Slider & sampling settings (fixed) ===
num_steps = 50
dx        = 1e-3

# === Estimate y(limit) and local slope to pick a sensible x‑window ===
try:
    y_limit = func(limit_x)
    slope   = abs(func(limit_x + dx) - func(limit_x - dx)) / (2*dx)
except:
    y_limit = 0
    slope   = 1

# domain_width based on function value & slope (at least 1, cap at 100)
domain_width = max(1, abs(y_limit), slope * 2)
domain_width = min(domain_width, 100)

# === Sample curve around limit_x ===
x_vals = np.linspace(limit_x - domain_width,
                     limit_x + domain_width,
                     300)
y_vals = func(x_vals)

# === Helper to get “approach” segments at step i ===
x0, x1 = x_vals[0], x_vals[-1]
def segment(i):
    t       = i / (num_steps - 1)
    left_x  = np.interp(t, [0,1], [x0, limit_x])
    right_x = np.interp(t, [0,1], [x1, limit_x])
    left_mask   = x_vals <= left_x
    right_mask  = x_vals >= right_x
    return (x_vals[left_mask],  y_vals[left_mask],
            x_vals[right_mask], y_vals[right_mask])

# === Build figure ===
fig = go.Figure()

# full curve
fig.add_trace(go.Scatter(
    x=x_vals, y=y_vals,
    mode="lines",
    line=dict(color="lightgray", width=2),
    name="f(x)"
))

# approaching segments
xL0, yL0, xR0, yR0 = segment(0)
fig.add_trace(go.Scatter(x=xL0, y=yL0, mode="lines",
                         line=dict(color="black", width=4),
                         name="From Left"))
fig.add_trace(go.Scatter(x=xR0, y=yR0, mode="lines",
                         line=dict(color="#FFCC00", width=4),
                         name="From Right"))

# limit‑point marker
fig.add_trace(go.Scatter(
    x=[limit_x], y=[y_limit],
    mode="markers+text",
    marker=dict(color="red", size=10),
    text=[f"Limit (x={limit_x})"],
    textposition="top center",
    showlegend=False
))

# slider steps
steps = []
for i in range(num_steps):
    xL, yL, xR, yR = segment(i)
    steps.append(dict(
        method="restyle",
        args=[{"x": [xL.tolist(), xR.tolist()],
               "y": [yL.tolist(), yR.tolist()]},
              [1, 2]],
        label=""
    ))

fig.update_layout(
    sliders=[dict(active=0, steps=steps,
                  currentvalue={"visible": False},
                  pad={"t": 50}, ticklen=0)],
    xaxis=dict(autorange=True,  fixedrange=True, title="x-axis"),
    yaxis=dict(autorange=True,  fixedrange=True, title="y-axis"),
    showlegend=True
)

fig.show()

fig_json = fig.to_json(pretty=True)

# Save to file
with open("limit-graph.txt", "a") as f:
  f.write(fig_json)