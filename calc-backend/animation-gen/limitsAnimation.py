import numpy as np   
from manim import *

class Limit(Scene):
    def construct(self):
        
        axes = (Axes(
            x_range=[0.1, 4, 1],
            y_range=[0, 10, 2],
            axis_config={"include_numbers": True},
            x_length=8,
            y_length=5
          )
          .set_color(GRAY_A)
        )

        labels = axes.get_axis_labels(x_label="x", y_label="y").set_color(GRAY_A)

        self.add(axes, labels)

        def func(x):
            if x == 2:
                return np.nan  # removable discontinuity
            return (x**2 + 4*x - 12)/(x**2 - 2*x)

        graph = axes.plot(
            func, 
            color=WHITE, 
            discontinuities=[2], 
            dt=0.01,
            x_range=[.7, 3.9]
        )

        hole_point = Circle(
            radius=0.04,
            color=WHITE,
            fill_opacity=0,
            stroke_width=4
        ).move_to(axes.c2p(2, func(2.01)))

        self.play(Create(graph), FadeIn(hole_point), run_time=2)

        # ValueTrackers for dynamic movement
        t_left = ValueTracker(0.7)
        t_right = ValueTracker(3.5)

        # Initial dummy arrows
        left_arrow = always_redraw(lambda: Arrow(
            start=axes.c2p(0.7, func(0.7) + 0.3),
            end=axes.c2p(t_left.get_value(), func(t_left.get_value())),
            color=BLUE,
            stroke_width=6,
            buff=0
        ))

        right_arrow = always_redraw(lambda: Arrow(
            start=axes.c2p(3.5, func(3.5) + 0.3),
            end=axes.c2p(t_right.get_value(), func(t_right.get_value())),
            color=YELLOW,
            stroke_width=6,
            buff=0
        ))

        self.add(left_arrow, right_arrow)

        # Animate trackers to move arrows toward x = 2
        self.play(
            t_left.animate.set_value(1.99),
            t_right.animate.set_value(2.01),
            run_time=2,
            rate_func=linear
        )

        self.wait(0.5)

        self.play(
            FadeOut(graph),
            FadeOut(hole_point),
            FadeOut(left_arrow),
            FadeOut(right_arrow)
        )

        self.wait(2.5)
