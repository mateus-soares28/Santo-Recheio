"use client";

import { useEffect } from "react";

export function MotionController() {
  useEffect(() => {
    let cancelled = false;
    let cleanup = () => {};

    async function mount() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const context = gsap.context(() => {
          gsap.timeline({ defaults: { ease: "power3.out" } })
            .from(".hero-copy h1 span", { y: 42, autoAlpha: 0, duration: 0.8, stagger: 0.12 })
            .from(".hero-copy > p", { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.35")
            .from(".hero-actions", { y: 18, autoAlpha: 0, duration: 0.55 }, "-=0.3");

          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
            ScrollTrigger.create({
              trigger: element,
              start: "top 88%",
              once: true,
              onEnter: () => {
                gsap.fromTo(element,
                  { y: 32, autoAlpha: 0 },
                  { y: 0, autoAlpha: 1, duration: 0.75, ease: "power2.out", clearProps: "transform,visibility,opacity" },
                );
              },
            });
          });

          ScrollTrigger.create({
            trigger: ".flavor-grid",
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.fromTo(".flavor-card",
                { y: 28, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.075, ease: "power2.out", clearProps: "transform,visibility,opacity" },
              );
            },
          });

        });
        return () => context.revert();
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
