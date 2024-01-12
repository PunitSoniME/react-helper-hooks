import React, { createContext, useState } from 'react'

export const Context2 = createContext<any>(null);

export default function Context2Provider({ children }: any) {

    const [context2Value, setContext2Value] = useState("Old Value");

    return (
        <Context2.Provider
            value={{
                context2Value,
                setContext2Value
            }}
        >
            {children}
        </Context2.Provider>
    )
}
