import React from "react";
import {buttons} from "@syncfusion/ej2";

const Button = ({bgColor, color, size, text, borderRadius}) => {
    return (
        <button
            type='button'
            style={{backgroundColor: bgColor, color, borderRadius}}
            className={`text-${size} p-3 hover:drop-shadow-xl`}
        >
            {text}
        </button>
    )
}

export default Button