import { useEffect, useRef } from "react";

const useDidMountEffect = (callback: () => Function | void, deps: any[]) => {
  const isFirstRender = useRef(false);

  useEffect(() => {
    if (isFirstRender.current) return;
    isFirstRender.current = true;
    const cleanUp = callback();
    return () => {
      if (typeof cleanUp === "function") {
        cleanUp();
      }
    };
  }, deps);
};

export default useDidMountEffect;
