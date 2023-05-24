import React, { useRef } from "react";

type useSliderProps = {
  width: number;
};
const useSlider = ({ width }: useSliderProps) => {
  const isDown = useRef(false);

  const offsetX = useRef(0);
  const downPosX = useRef(0);

  const targetTranslateX = (target: HTMLElement, position: number) => {
    target.style.transform = `translateX(${position}px)`;
  };

  const registerEvent = {
    onPointerDown: (event: React.PointerEvent<HTMLElement>) => {
      const target = event.currentTarget;
      isDown.current = true;
      downPosX.current = event.clientX - offsetX.current;
      target.style.transition = "none";
    },
    onPointerMove: (event: React.PointerEvent<HTMLElement>) => {
      if (!isDown.current) return;

      const target = event.currentTarget;

      offsetX.current = downPosX.current - event.clientX;

      if (offsetX.current > width) {
        offsetX.current = width;
      }
      if (offsetX.current < 0) {
        offsetX.current = 0;
      }

      targetTranslateX(target, offsetX.current * -1);
    },
    onPointerUp: (event: React.PointerEvent<HTMLElement>) => {
      isDown.current = false;

      const target = event.currentTarget;
      target.style.transition = "all 0.2s ease";

      if (offsetX.current < width / 2) {
        offsetX.current = 0;
      } else {
        offsetX.current = width * -1;
      }

      targetTranslateX(target, offsetX.current);
    },
  };

  return {
    registerEvent,
  };
};

export default useSlider;
