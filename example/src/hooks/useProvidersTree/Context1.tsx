import React, { createContext, useState } from 'react'

export const Context1 = createContext<any>(null);

export default function Context1Provider({ children }: any) {

    const [context1Value, setContext1Value] = useState("Old Value");

    return (
        <Context1.Provider
            value={{
                context1Value,
                setContext1Value
            }}
        >
            {children}
        </Context1.Provider>
    )
}
