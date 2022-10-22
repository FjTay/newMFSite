import React from "react";
import { useHistory } from "react-router-dom";

const TopMenuItem = (props) => {

    const history = useHistory()

    const handleClick = () => {
        if(history.location.state !== props.entry) {
            history.push(`/${props.entry}`)
            history.replace({
                state : {menuItem : props.entry, title : props.value}
            })
        }
        props.previousMenuItem.current = props.entry
    }

    return (
        <>
            <div
                onClick={() => handleClick()}
                className={props.classN}
            >{props.value}
            </div>
            {console.log("render du TopMenuItem")}
        </>
    )
};

export default React.memo(TopMenuItem);