import React from "react";
import { useHistory } from "react-router-dom";
import Line from "./line";
import TitleArea from "./titleArea";

const Favs = (props) => {

    const history = useHistory()

    return (
        <>
            <div 
                id="favs" 
                className="display"
            >
                <TitleArea
                    title={history.location.state?.title}
                    subTitle={history.location.state?.subTitle}
                ></TitleArea>
                {props.data.map(line => {
                    return (
                        <Line
                            delete={props.delete}
                            key={line.reference}
                            line={line}
                            handleBasket={props.handleBasket}
                            isBasket={false}
                        ></Line>
                    );
                })}
            </div>
            {console.log("Favs")}
        </>
    )
};

export default Favs;