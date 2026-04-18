export const startViewTransition = (cb: () => void) => {
  if (!document.startViewTransition) {
    cb();
    return;
  }

  document.startViewTransition(cb);
};
