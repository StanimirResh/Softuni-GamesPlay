import { useState } from "react"


export const useLocalStorage = (key, defValue) => {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);
        if (storedData) {
            return JSON.parse(storedData);
        } else {
            return defValue;

        }
    });

    const setLocalStorageVal = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));

        setValue(newValue);
    }

    return [
        value,
        setLocalStorageVal
    ]
}