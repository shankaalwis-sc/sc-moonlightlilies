// Light each lamp on the Legend's lake as its chapter rises into view, one by one,
// the way the lilies opened in the story. Without JS every lamp is already lit.
(() => {
  const beats = document.querySelectorAll(".lake__beat");
  const light = (beat) => beat.classList.add("is-lit");

  if (!("IntersectionObserver" in window)) {
    beats.forEach(light);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        // Chapters already scrolled past (a deep link, a reload mid-page) are lit too.
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          light(entry.target);
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -30% 0px" },
  );

  beats.forEach((beat) => observer.observe(beat));
})();
