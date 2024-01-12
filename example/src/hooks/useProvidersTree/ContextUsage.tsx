import React, { useContext } from 'react'
import { Button } from '@/components/ui/button';
import { Context1 } from './Context1';
import { Context2 } from './Context2';

export default function ContextUsage() {

    const { context1Value, setContext1Value } = useContext(Context1);
    const { context2Value, setContext2Value } = useContext(Context2);

    return (
        <div className='space-y-3'>
            <p>Context Usage</p>

            <p>Context 1 value - {context1Value}</p>

            <p>Context 2 value - {context2Value}</p>

            <div className='flex gap-3'>
                <Button size="sm" onClick={() => {
                    setContext1Value("Yeah, Context 1 value updated");
                }}>
                    Update Value of Context 1 Provider
                </Button>

                <Button size="sm" onClick={() => {
                    setContext2Value("Yeah, Context 2 value updated");
                }}>
                    Update Value of Context 2 Provider
                </Button>
            </div>
        </div>
    )
}
