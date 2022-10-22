import React from "react";

const TitleArea = (props) => {

    return (
        <>  
            <div id="titleArea">
                <div>{props.title}</div>
                <div>{props.subTitle}</div>
            </div>
            {console.log("Title Area")}
        </>
    )
};

export default React.memo(TitleArea);