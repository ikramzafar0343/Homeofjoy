/**
 * Reference-counted body scroll lock.
 *
 * Several components (preloader, header menu, gallery lightbox, topic modal)
 * need to freeze scrolling. Writing `document.body.style.overflow` directly
 * from each of them lets a later mount clear a lock it never took, which
 * releases the page while the preloader is still covering it and leaves
 * ScrollTrigger measuring pins against the wrong scroll height.
 */

const activeLocks = new Set<string>();

function applyLockState(): void {
  document.body.style.overflow = activeLocks.size > 0 ? "hidden" : "";
}

export function lockBodyScroll(owner: string): void {
  if (typeof document === "undefined") {
    return;
  }
  activeLocks.add(owner);
  applyLockState();
}

export function releaseBodyScroll(owner: string): void {
  if (typeof document === "undefined") {
    return;
  }
  activeLocks.delete(owner);
  applyLockState();
}

/** Binds a lock to a boolean piece of state; returns the effect cleanup. */
export function syncBodyScrollLock(owner: string, locked: boolean): () => void {
  if (locked) {
    lockBodyScroll(owner);
  } else {
    releaseBodyScroll(owner);
  }
  return () => releaseBodyScroll(owner);
}
