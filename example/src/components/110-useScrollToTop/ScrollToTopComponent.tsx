import React from 'react'
import { useScrollToTop } from 'react-helper-hooks';

export default function ScrollToTopComponent() {

    const scrollToTop = useScrollToTop();

    return (
        <div>
            <h2>Scroll to bottom and click on below button</h2>
            <button type="button" onClick={scrollToTop}>Click To Scroll To Top</button>
        </div>
    )
}
