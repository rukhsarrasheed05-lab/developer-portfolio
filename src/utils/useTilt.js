import { useRef } from "react";

// Small, dependency-free tilt effect: transforms a card based on
// pointer position relative to its center.
export default function useTilt(strength = 10) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${-y * strength}deg) rotateY(${
      x * strength
    }deg) translateZ(6px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
