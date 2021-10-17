import React, { useRef } from 'react'
import { useOnScreen } from 'react-helper-hooks';

export default function OnScreenComponent() {
    const headerTwoRef = useRef<any>();
    const visible = useOnScreen(headerTwoRef, "100px")

    return (
        <div style={{ height: "300px", overflow: "scroll"  }}>
            <h1>Header 1</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia ullam voluptas quos veritatis, nihil nostrum ipsa eos laborum consectetur quibusdam quis tempore aliquam numquam sunt odit consequuntur in atque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia ullam voluptas quos veritatis, nihil nostrum ipsa eos laborum consectetur quibusdam quis tempore aliquam numquam sunt odit consequuntur in atque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia ullam voluptas quos veritatis, nihil nostrum ipsa eos laborum consectetur quibusdam quis tempore aliquam numquam sunt odit consequuntur in atque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia ullam voluptas quos veritatis, nihil nostrum ipsa eos laborum consectetur quibusdam quis tempore aliquam numquam sunt odit consequuntur in atque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia ullam voluptas quos veritatis, nihil nostrum ipsa eos laborum consectetur quibusdam quis tempore aliquam numquam sunt odit consequuntur in atque?
            </p>

            <h1 ref={headerTwoRef}>Header 2 {visible && "(Visible)"}</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia ullam voluptas quos veritatis, nihil nostrum ipsa eos laborum consectetur quibusdam quis tempore aliquam numquam sunt odit consequuntur in atque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia ullam voluptas quos veritatis, nihil nostrum ipsa eos laborum consectetur quibusdam quis tempore aliquam numquam sunt odit consequuntur in atque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia ullam voluptas quos veritatis, nihil nostrum ipsa eos laborum consectetur quibusdam quis tempore aliquam numquam sunt odit consequuntur in atque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia ullam voluptas quos veritatis, nihil nostrum ipsa eos laborum consectetur quibusdam quis tempore aliquam numquam sunt odit consequuntur in atque?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia ullam voluptas quos veritatis, nihil nostrum ipsa eos laborum consectetur quibusdam quis tempore aliquam numquam sunt odit consequuntur in atque?
            </p>
        </div>
    )
}
