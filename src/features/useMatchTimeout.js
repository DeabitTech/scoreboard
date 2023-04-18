import { useEffect, useRef } from "react";

const useMatchTimeout = (callback, delay) => {
    const timeoutRef = useRef(null);
    const storedCallback = useRef(callback);

    useEffect(() => {
        storedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const action = () => storedCallback.current();
        timeoutRef.current = window.setTimeout(action, delay);
        return () => window.clearTimeout(timeoutRef.current);
     
    }, [delay]);

    return timeoutRef;
};
export default useMatchTimeout;
