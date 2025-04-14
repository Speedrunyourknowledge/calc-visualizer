from manim import *

class RightRiemannSum(Scene):
    def construct(self):
        axes = Axes(
            x_range=[0, 2.5, 1],
            y_range=[0, 5, 1],
            x_length=10,
            y_length=5,
            axis_config={"include_numbers": True}
        ).to_edge(LEFT)

        x_label = axes.get_x_axis_label("x")
        y_label = axes.get_y_axis_label("y")

        self.play(Create(axes), Write(x_label), Write(y_label))

        graph = axes.plot(lambda x: 0.6 * x**2, x_range=[0, 2.3], color=WHITE)
        self.play(Create(graph), run_time=2)

        a, b = 0, 2
        n = 10
        dx = (b - a) / n
        rectangles = VGroup()
        area_sum = 0

        for i in range(1, n + 1):
            x_right = a + i * dx
            height = 0.6 * x_right**2
            area_sum += height * dx

            rect_corner = axes.c2p(x_right - dx, 0)
            rect_width = axes.c2p(dx, 0)[0] - axes.c2p(0, 0)[0]
            rect_height = axes.c2p(0, height)[1] - axes.c2p(0, 0)[1]

            rect = Rectangle(
                width=rect_width,
                height=rect_height,
                fill_color=YELLOW,
                fill_opacity=0.8,
                stroke_width=0.5
            )
            rect.align_to(rect_corner, DOWN + LEFT)
            rectangles.add(rect)

        for rect in rectangles:
            self.play(FadeIn(rect, run_time=0.2))

        area_text = Text(f"Area ≈ {area_sum:.2f}", font_size=36)
        area_text.to_edge(UP).shift(DOWN*2.4 + LEFT * 3.5)
        self.play(Write(area_text))

        self.wait(1.5)
        
        self.play(
            FadeOut(rectangles),
            FadeOut(area_text),
            FadeOut(graph),
            FadeOut(axes),
            FadeOut(x_label),
            FadeOut(y_label),
            run_time=1
        )
