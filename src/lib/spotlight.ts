import type { MouseEvent } from "react";

// Updates CSS custom properties so a radial "spotlight" follows the cursor
// across any element carrying the `.glow-card` class.
export function handleSpotlight(e: MouseEvent<HTMLElement>) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  card.style.setProperty("--my", `${e.clientY - rect.top}px`);
}
