import { useEffect, useRef } from "react";

const useScoreInterval = (callback, delay) => {
    const intervalScoreRef = useRef(null);
    const storedCallback = useRef(callback);

    useEffect(() => {
        storedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const action = () => storedCallback.current();
    
        intervalScoreRef.current = window.setInterval(action, delay);
        return () => window.clearInterval(intervalScoreRef.current);
       
    }, [delay]);

    return intervalScoreRef;
}

export default useScoreInterval;