import React from "react";

const Button = (props) => {

    return (
        <>
            <div
                className={props.classN}
                style={props.lineStyle}
                onClick={() => props.click(props.value)}
            >{props.children}</div>
            {console.log("Button")}
        </>
    )
};

export default Button;