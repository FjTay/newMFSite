import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Line from "./line";
import TitleArea from "./titleArea";

const Basket = (props) => {

    const history=useHistory()
    const [total, setTotal] = useState(0)
    // props.data.reduce((acc, line) => { return acc + line.qty * line.bagSize * line.price[line.priceIndex]; }, 0)

    const handleTotal = (qty) => {
        setTotal(oldTotal => {return oldTotal + qty})
    }

    return (
        <>
            <div 
                id="basket" 
                className="display"
            >
                <TitleArea
                    title={history.location.state?.title}
                    subTitle={history.location.state?.subTitle}
                ></TitleArea>
                <div>total : {total}</div>
            {props.data.map((line, index) => {
                return (
                    <Line
                        delete={props.delete}
                        key={line.reference + index}
                        line={line}
                        handleBasket={props.handleBasket}
                        isBasket={true}
                        handleTotal={handleTotal}
                    ></Line>
                );
            })}
            </div>
            {console.log("Basket")}
        </>
    )
};

export default Basket;