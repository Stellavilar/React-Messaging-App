//File that is used to save into localStorage
import { useState, useEffect } from 'react';

//Prefix to the key in browser Application/Storage
const PREFIX = 'whatsapp-clone-';

export default function useLocalStorage(key, initialValue) {
    //Function that is used to save the Id as a key into the localStrage
    const prefixedKey = PREFIX + key;
    const [ value, setValue ] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey);
        if (jsonValue != null) return JSON.parse(jsonValue);
        if(typeof initialValue === 'function') {
            return initialValue();
        }else{
            return initialValue
        };
    });

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value]);

    return [ value, setValue ];
};
