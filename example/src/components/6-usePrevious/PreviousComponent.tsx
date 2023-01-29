import { useState } from "react";
import { usePrevious } from "react-helper-hooks";

export default function PreviousComponent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Punit");
    const previousCount = usePrevious(count);

    return (
        <div>
            <div>
                <div>Current Value: {count}</div>
                <div>Previous Value: {previousCount}</div>
            </div>
            <button onClick={() => setCount((value) => value + 1)}>Increment</button>

            <br /><br /><br />

            <div>{name}</div>

            <button onClick={() => setName("Soni")}>Change Name</button>
            <br />

            <p>
                This change name variable is used only to show you that whole component is not rerendering when we update other variable
            </p>
        </div>
    );
}

