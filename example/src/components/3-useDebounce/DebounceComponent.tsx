import { useState } from 'react'
import { useDebounce } from 'react-helper-hooks';

export default function DebounceComponent() {

    const [search, setSearch] = useState("");

    useDebounce(() => alert("Making an api call."), 1000, [search]);

    return (
        <div>
            <code>
                <span dangerouslySetInnerHTML={{ __html: `useDebounce(() => alert("Make api call now"), 1000, [search]);` }}></span>
            </code>
            <br />
            <p>This hook will call after 1 second whenever you stop typing</p>
            <br />
            <input type="search" placeholder="Search to make api call" value={search}
                onChange={(e) => { setSearch(e.target.value) }} />
        </div>
    )
}
