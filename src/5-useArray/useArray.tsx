import React, { useState } from 'react'

export default function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue);

    function push(element) {
        setArray(a => [...a, element]);
    }

    function filter(callback) {
        setArray(a => a.filter(callback));
    }

    function update(index, newElement) {
        setArray(array.splice(index, 1, newElement) && [...array]);
    }

    function remove(index) {
        setArray(array.filter((_, i) => index !== i));
    }

    function clear() {
        setArray([]);
    }

    return { array, set: setArray, push, filter, update, remove, clear };
}
