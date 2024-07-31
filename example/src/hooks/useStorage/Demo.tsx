import { useState } from 'react';
import { useSessionStorage, useLocalStorage } from '../../../..';
import { Button } from '@/components/ui/button';

export default function Demo() {

    const [name, setName, removeName] = useSessionStorage("name", "Punit");
    const [city, setCity, removeCity] = useLocalStorage("city", "Patan");

    return (
        <div className='flex justify-between flex-col gap-4 divide-y'>

            <div className='flex flex-col gap-3'>
                <h3>Local Storage</h3>
                <p>Name: {name}</p>

                <div className='flex gap-3'>
                    <Button size="sm" onClick={() => setName("Soni")}>Set Name</Button>
                    <Button size="sm" onClick={removeName}>Remove Name</Button>
                </div>
            </div>

            <div className='flex flex-col gap-3 pt-2'>
                <h3>Session Storage</h3>
                <p>City: {city}</p>

                <div className='flex gap-3'>
                    <Button size="sm" onClick={() => setCity("Ahmedabad")}>Set City</Button>
                    <Button size="sm" onClick={removeCity}>Remove City</Button>
                </div>
            </div>

        </div>
    )
}
