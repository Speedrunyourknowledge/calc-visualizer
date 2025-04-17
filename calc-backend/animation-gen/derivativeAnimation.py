from manim import *

class DerivativeAnimation(Scene):
    def construct(self):
        axes = (
            Axes(
                x_range=[0,5,1],
                x_length = 11,
                y_range=[0,5,1],
                y_length = 6,
                axis_config={"include_numbers": True, "include_tip": False}
            )
            .to_edge(DL)
            .set_color(GRAY_A)
        )
        
        axes_labels = axes.get_axis_labels(x_label="x",y_label="y").set_color(GRAY_A)

        func = axes.plot(
            lambda x: .5 * x * (x-3) * (x-4) + .6, 
            x_range = (0,5)
        )

        x = ValueTracker(5.5)
        dx = ValueTracker(.33)

        secant = always_redraw(
            lambda: axes.get_secant_slope_group(
                x = x.get_value(),
                graph=func,
                dx=dx.get_value(),
                dx_line_color=YELLOW,
                dy_line_color=ORANGE,
                dx_label = "dx",
                dy_label = "dy",
                secant_line_color=GREEN,
                secant_line_length=5
            )
        )

        dot1 = always_redraw(
            lambda: Dot()
            .scale(0.7)
            .move_to(axes.c2p(x.get_value(), func.underlying_function(x.get_value())))
        )

        dot2 = always_redraw(
            lambda: Dot()
            .scale(0.7)
            .move_to(
                axes.c2p(
                    (x).get_value() + dx.get_value(),
                    func.underlying_function(x.get_value() + dx.get_value()),                                   
                )
            )
        )

        tangent_label = always_redraw(
            lambda: MathTex("y = f'(x)")
            .scale(0.75)
            .next_to(dot1, UL, buff=0.5)
            .set_color(GREEN)
        )

        self.add(axes, axes_labels, func)
        self.add(dot1,dot2,secant,tangent_label)
        self.play(x.animate(rate_func=linear).set_value(3), run_time = 1.5)
        self.play(x.animate(rate_func=rush_from).set_value(1), run_time = 2)
        self.play(x.animate(rate_func=rush_into).set_value(3), run_time = 2)
        self.play(x.animate(rate_func=linear).set_value(5.5), run_time = 1.5)

        self.wait(3)