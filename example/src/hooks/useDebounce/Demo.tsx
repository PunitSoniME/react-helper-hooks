import { useState } from 'react';
import { useDebounce } from '../../../..';
import { Input } from '@/components/ui/input';

const timer = 1000;

export default function Demo() {


    const [search, setSearch] = useState("");
    const [debounced, setDebounced] = useState('');

    useDebounce(() => {
        setDebounced(search);
    }, timer, [search]);


    return (
        <div className="flex flex-col gap-3">
            <p>This hook will change the value of debounced variable after {timer / 1000} second whenever you stop typing.</p>

            <Input
                className="w-full lg:w-1/2"
                type="search"
                placeholder="Type something..."
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
            />

            <div className="flex flex-col gap-1 mt-2">
                <p className="text-sm">Value - {search}</p>
                <p className="text-sm">Debounced Value - {debounced}</p>
            </div>
        </div>
    )
}
