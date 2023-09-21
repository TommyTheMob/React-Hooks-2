import React from "react";
import './resetBtn.scss'

const ResetBtn = ({ onReset }) => {
    return (
        <>
            <button
                className="reset-btn"
                onClick={onReset}
            >
                Reset
            </button>
        </>
    )
}

export default ResetBtn