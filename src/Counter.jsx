import React, { useState } from "react";
import ResetBtn from './ResetBtn.jsx'
import './counter.scss'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <div className="counter">
                <button
                    className="counter__button"
                    onClick={() => setCounter(counter - 1)}
                >
                    -
                </button>
                <span
                    className="counter__value"
                >
                    {counter}
                </span>
                <button
                    className="counter__button"
                    onClick={() => setCounter(counter + 1)}
                >
                    +
                </button>
            </div>
            <ResetBtn onReset={() => setCounter(0)}/>
        </>
    )
}

export default Counter