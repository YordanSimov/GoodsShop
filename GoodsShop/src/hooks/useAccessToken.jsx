import { useState } from 'react';

export default function useAccessToken(key, defaultValue) {
    const [state, setState] = useState(() => {
        const currentState = localStorage.getItem(key);

        if (currentState) {
            return JSON.parse(currentState);
        }

        return defaultValue;
    });

    const setPersistedState = (value) => {
        setState(value);

        let serializedValue;
        if (typeof value === 'function') {
            serializedValue = JSON.stringify(value(state));
        } else {
            serializedValue = JSON.stringify(value);
       }

        localStorage.setItem(key, serializedValue);
    };

    return [
        state,
        setPersistedState,
    ];
}