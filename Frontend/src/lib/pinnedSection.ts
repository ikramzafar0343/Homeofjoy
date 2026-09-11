import type { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * ScrollTrigger recalculates pins in descending refreshPriority order, and a
 * pin's start position depends on the pinSpacing added by every pin above it.
 * These values must therefore descend in homepage document order, otherwise a
 * later section measures against stale spacing and the page appears to jump
 * into the next section and snap back.
 */
export const pinRefreshPriority = {
  howWeServe: 30,
  impact: 20,
  journey: 10,
} as const;

/**
 * Shared options for full-viewport pinned sections.
 *
 * `preventOverlaps` and `fastScrollEnd` are deliberately omitted: with several
 * pinned sections on one page they force neighbouring triggers to jump to
 * their end state, which reads as broken scrolling.
 */
export const pinnedSectionDefaults = {
  pinSpacing: true,
  anticipatePin: 1,
  invalidateOnRefresh: true,
} satisfies Partial<ScrollTrigger.Vars>;
