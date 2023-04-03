let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver({
  onEnter,
  onExit,
}: {
  onEnter: () => void;
  onExit: () => void;
}) {
  if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? onEnter() : onExit();
    });
  });
}

export default function viewport(
  element: Element,
  monkeys: { onEnter: () => void; onExit: () => void }
) {
  ensureIntersectionObserver(monkeys);

  intersectionObserver.observe(element);

  return {
    destroy() {
      intersectionObserver.unobserve(element);
    },
	
  };
}
