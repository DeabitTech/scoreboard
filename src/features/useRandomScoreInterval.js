import { useEffect, useRef, useCallback } from "react";

export const randomCalc = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const useRandomScoreInterval = (callback, minDelay, maxDelay) => {
    const timeoutId = useRef(null);
    const storedCallback = useRef(callback);

    useEffect(() => {
        storedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
       
     
        const handleAction = () => {
            const nextTickAt = randomCalc(minDelay, maxDelay);
            timeoutId.current = window.setTimeout(() => {
                storedCallback.current();
                handleAction();
            }, nextTickAt);
        };
        handleAction();
   
        return () => window.clearTimeout(timeoutId.current);
    }, [minDelay, maxDelay]);

    const cancelTimeout = useCallback(function () {
        window.clearTimeout(timeoutId.current);
    }, []);

    return cancelTimeout;
};
export default useRandomScoreInterval;
