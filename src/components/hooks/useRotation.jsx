import { useRef, useState } from "react";

export default function useDragRotation(sensitivity = 0.4) {
  const [rotation, setRotation] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);

  const DRAG_THRESHOLD = 3;

  const startDrag = (x) => {
    isDragging.current = true;
    startX.current = x;
    startRotation.current = rotation;
    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
  };

  const updateDrag = (x) => {
    if (!isDragging.current) return;
    const deltaX = x - startX.current;

    if (Math.abs(deltaX) > DRAG_THRESHOLD) {
      const newRotation = startRotation.current + deltaX * sensitivity;
      setRotation(newRotation);

      // Cập nhật lại để tiếp tục mượt
      startX.current = x;
      startRotation.current = newRotation;
    }
  };

  const endDrag = () => {
    isDragging.current = false;
    document.body.style.userSelect = "";
    document.body.style.cursor = "default";
  };

  // Mouse handlers
  const handleMouseDown = (e) => startDrag(e.clientX);
  const handleMouseMove = (e) => updateDrag(e.clientX);
  const handleMouseUp = () => endDrag();

  // Touch handlers
  const handleTouchStart = (e) => startDrag(e.touches[0].clientX);
  const handleTouchMove = (e) => updateDrag(e.touches[0].clientX);
  const handleTouchEnd = () => endDrag();

  return {
    rotation,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
}
