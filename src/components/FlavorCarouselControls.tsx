"use client";

import { Arrow } from "@/components/Arrow";

export function FlavorCarouselControls() {
  function move(direction: -1 | 1) {
    const carousel = document.getElementById("flavor-grid");
    const card = carousel?.querySelector<HTMLElement>(".flavor-card");
    if (!carousel || !card) return;

    const gap = parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const distance = card.getBoundingClientRect().width + gap;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    carousel.scrollBy({ left: direction * distance, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <div className="flavor-carousel-controls">
      <span>Deslize para ver todos os sabores</span>
      <div>
        <button type="button" aria-label="Ver sabores anteriores" aria-controls="flavor-grid" onClick={() => move(-1)}><Arrow left /></button>
        <button type="button" aria-label="Ver próximos sabores" aria-controls="flavor-grid" onClick={() => move(1)}><Arrow /></button>
      </div>
    </div>
  );
}
