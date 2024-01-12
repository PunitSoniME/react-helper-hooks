export default function useScrollToTop() {
  const scrollToTop = (elementId?: string) => {
    if (elementId) {
      const element = document.getElementById(elementId);
      element?.scrollTo(0, 0);
    } else {
      const c = document.documentElement.scrollTop || document.body.scrollTop;

      if (c > 0) {
        window.requestAnimationFrame(() => scrollToTop());
        window.scrollTo(0, c - c / 8);
      }
    }
  };

  return scrollToTop;
}
