import React from "react";
import TeaHelper from "./TeaHelper";

const TagZone = (props) => {

    const labelList = []

    const getLabel= (value) => {
        const label = props.tags?.filter(tagData => tagData.value === value)
        value === 2.2 && console.log(label)
        return(label === undefined ? "" : label.length === 0 ? "NULL" : label[0].display)
    }

    for (const value of props.data) {
        getLabel(value)
        value !== '' && value !== false && value !== 0 &&
        labelList.push(
            <>
                <div className="tagCheckbox">
                    <input
                        className="checkbox"
                        type="checkbox" 
                        id={props.name + value} 
                        name={props.name} 
                        value={props.title}
                        defaultChecked={props.data.length === 1 && true}
                        disabled={props.data.length === 1 && true}
                        onChange={() => {
                            props.handleFilters(props.name, value)
                        }}
                    ></input>
                    <label
                        htmlFor={props.name + value}
                    >{getLabel(value)}</label><br></br> 
                </div>
            </>
        )
    }

    return (
        <>  
            <div
                className={labelList.length > 0 ? "tagZone" : "hidden"}
            >
                <small>{props.title}</small>
                <form>
                    
                    {labelList}
                </form>
            </div>
            {console.log("Tag Zone")}
        </>
    )
};

export default TagZone;