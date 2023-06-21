import { useEffect, useRef } from "react"

const useDidMountEffect = (callback : () => void, deps: any[]) => {
    const isFirstRender = useRef(false);
    useEffect (() => {
        if(isFirstRender.current) return;
        isFirstRender.current = true;
        callback();
    },deps)
}

export default useDidMountEffect;