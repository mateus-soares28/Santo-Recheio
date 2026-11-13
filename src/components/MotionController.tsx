"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};

    async function mount() {
      const [{ gsap }, { ScrollTrigger }, { ScrollSmoother }, { SplitText }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("gsap/ScrollSmoother"),
        import("gsap/SplitText"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
      const media = gsap.matchMedia();

      media.add({
        desktop: "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
        mobile: "(max-width: 899px) and (prefers-reduced-motion: no-preference)",
      }, (mediaContext) => {
        const desktop = Boolean(mediaContext.conditions?.desktop);
        const smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.35,
          smoothTouch: 0.15,
        });
        const splits: Array<{ revert: () => void }> = [];

        const context = gsap.context(() => {
          gsap.timeline({ defaults: { ease: "power3.out" } })
            .from(".hero-copy h1 span", { y: 42, autoAlpha: 0, duration: 0.8, stagger: 0.12 })
            .from(".hero-copy > p", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.35")
            .from(".hero-actions", { y: 18, autoAlpha: 0, duration: 0.55 }, "-=0.3");

          const sections = gsap.utils.toArray<HTMLElement>("#smooth-content main > section:not(.hero)");
          sections.forEach((section, index) => {
            const content = section.querySelector<HTMLElement>(":scope > .container");
            if (!content) return;

            gsap.fromTo(content,
              { x: (index % 2 ? 1 : -1) * (desktop ? 64 : 28), y: desktop ? 34 : 20, autoAlpha: 0 },
              {
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: content,
                  start: "top 92%",
                  end: "top 58%",
                  scrub: 0.8,
                },
              },
            );

            const heading = section.querySelector<HTMLElement>("h2");
            if (!heading) return;
            splits.push(SplitText.create(heading, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              onSplit(self) {
                return gsap.fromTo(self.lines,
                  { yPercent: 85, autoAlpha: 0 },
                  {
                    yPercent: 0,
                    autoAlpha: 1,
                    stagger: 0.08,
                    ease: "none",
                    scrollTrigger: {
                      trigger: section,
                      start: "top 82%",
                      end: "top 48%",
                      scrub: 0.8,
                    },
                  },
                );
              },
            }));
          });

          const footer = document.querySelector<HTMLElement>("#smooth-content .footer-main");
          if (footer) {
            gsap.fromTo(footer, { y: 40, autoAlpha: 0 }, {
              y: 0,
              autoAlpha: 1,
              ease: "none",
              scrollTrigger: { trigger: footer, start: "top 92%", end: "top 68%", scrub: 0.8 },
            });
          }
        });

        ScrollTrigger.refresh();
        return () => {
          context.revert();
          splits.forEach((split) => split.revert());
          smoother.kill();
        };
      });

      cleanup = () => media.revert();
    }

    void mount();
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return null;
}
