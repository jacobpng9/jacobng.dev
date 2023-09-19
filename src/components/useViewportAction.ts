export default function viewport(
  element: Element,
  { onEnter, onExit }: { onEnter: () => void; onExit: () => void }
) {
  console.log("rerunning");
  const obs = new IntersectionObserver(
    (entries) => {
      console.log("observer", entries.length);
      entries.forEach((entry) => {
        entry.isIntersecting
          ? onEnter()
          : (() => {
              console.log("exit");
              onExit();
            })();
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  );

  obs.observe(element);

  return {
    destroy() {
      obs.unobserve(element);
      obs.disconnect();
    },
  };
}
