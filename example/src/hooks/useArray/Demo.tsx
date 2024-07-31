import React from 'react'
import { useArray } from '../../../..';
import { Button } from '@/components/ui/button';

export default function Demo() {
    const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6])

    return (
        <>
            <div>{array.join(", ")}</div>

            <div className="flex flex-row flex-wrap gap-3 mt-2">
                <Button size="sm" onClick={() => push(Math.floor(Math.random() * 50))}>Add random number</Button>
                <Button size="sm" onClick={() => update(1, 9)}>Update 2nd element to 9</Button>
                <Button size="sm" onClick={() => remove(1)}>Remove Second Element</Button>
                <Button size="sm" onClick={() => filter((f: number) => f < 3)}>Keep numbers less than 3</Button>
                <Button size="sm" onClick={() => set([1, 2])}>Set 1 to 2</Button>
                <Button size="sm" onClick={clear}>Clear</Button>
            </div>
        </>
    )
}
