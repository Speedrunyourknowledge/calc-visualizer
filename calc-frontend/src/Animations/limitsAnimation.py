import numpy as np 
from manim import *

class Limit(Scene):
    def construct(self):
        
        axes = Axes(
            x_range=[0.1, 4, 1],
            y_range=[0, 10, 2],
            axis_config={"include_numbers": True},
            x_length=8,
            y_length=5
        )
        labels = axes.get_axis_labels(x_label="x", y_label="y")
        self.play(Create(axes), Write(labels))

        def func(x):
            if x == 2:
                return np.nan  # removable discontinuity
            return (x**2 + 4*x - 12)/(x**2 - 2*x)

        graph = axes.plot(
            func, 
            color=WHITE, 
            discontinuities=[2], 
            dt=0.01,
            x_range=[.7,3.9]
        )

        hole_point = Circle(
            radius=0.04,
            color=WHITE,
            fill_opacity=0,
            stroke_width=4
        ).move_to(axes.c2p(2, func(2.01)))

        self.play(Create(graph), FadeIn(hole_point), run_time=2)

        def get_tangent_angle(x):
            dx = 0.001
            dy = func(x + dx) - func(x)
            return np.arctan2(dy, dx)

        t_left = ValueTracker(0.7)
        t_right = ValueTracker(3.5)

        left_arrow = Triangle(color=GREEN, fill_opacity=1).scale(0.2)
        left_arrow.rotate(PI/2)
        left_updater = always_redraw(
            lambda: left_arrow.move_to(axes.c2p(t_left.get_value(), func(t_left.get_value())))
                                 .set_angle(get_tangent_angle(t_left.get_value()))
        )

        right_arrow = Triangle(color=YELLOW, fill_opacity=1).scale(0.2)
        right_arrow.rotate(PI/2)
        right_updater = always_redraw(
            lambda: right_arrow.move_to(axes.c2p(t_right.get_value(), func(t_right.get_value())))
                                  .set_angle(get_tangent_angle(t_right.get_value()))
        )

        self.add(left_updater, right_updater)

        self.play(
            t_left.animate.set_value(1.99),
            t_right.animate.set_value(2.01),
            run_time=2,
            rate_func=linear
        )

        self.wait(.5)

        self.play(
            FadeOut(axes),
            FadeOut(labels),
            FadeOut(graph),
            FadeOut(hole_point),
            FadeOut(left_arrow),
            FadeOut(right_arrow)
        )

        self.wait(3)
