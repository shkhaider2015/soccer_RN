import React, { useState } from 'react'



export const useCounter = (initialState = 0) => {
    const [count, setCount] = useState(initialState);
    const add = () => setCount(count + 1);
    const subtract = () => setCount(count - 1);

    setTimeout(() => {
        setCount(count * 2)
    }, 3000);

    return { count, add, subtract };
};
