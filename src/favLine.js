import React, { useCallback, useState } from "react";
import Button from "./button";

const FavLine = (props) => {

    const [lineInfo, setLineInfo] = useState({
        unitPrice: props.line.price[props.line.priceIndex],
        qty: 0,
        bagSize: 1
    })

    const handleDelete = useCallback((line) => {
        props.delete(line);
    }, [props]);

    const handleQty = (newQty) => {
        if(lineInfo.qty === 0 && newQty === -1) {return}
        setLineInfo(oldInfo => ({...oldInfo, qty: oldInfo.qty + newQty}))
    }

    const handleBagSize = (newBagSize) => {
        setLineInfo({...lineInfo, bagSize: newBagSize})
    }

    const handleBuy = useCallback(() => {
        props.handleBasket({...props.line, ...lineInfo})
    }, [props, lineInfo])

    return (
        <>
            {console.log("Basket Line")}
            <div className="line">
                <table style={{width: "100%"}}>
                    <tbody>
                        <tr>
                            <th style={{width: "35%"}}>
                                <div className="lineTH lineInfo">{props.line.name} - {props.line.reference}</div>
                                <div className="lineTH">
                                    {props.line.price[props.line.priceIndex] > 20 && 
                                    <Button 
                                        classN={lineInfo.bagSize === 0.5 ? "button buttonGroup bagSelected" : "button buttonGroup"}
                                        click={handleBagSize}
                                        value={0.5}
                                    >50g</Button>}
                                    <Button 
                                        classN={lineInfo.bagSize === 1 ? "button buttonGroup bagSelected" : "button buttonGroup"}
                                        click={handleBagSize}
                                        value={1}
                                    >100g</Button>
                                    <Button 
                                        classN={lineInfo.bagSize === 2.5 ? "button buttonGroup bagSelected" : "button buttonGroup"}
                                        click={handleBagSize}
                                        value={2.5}
                                    >250g</Button>
                                    <Button 
                                        classN={lineInfo.bagSize === 5 ? "button buttonGroup bagSelected" : "button buttonGroup"}
                                        click={handleBagSize}
                                        value={5}
                                    >500g</Button>
                                </div>
                            </th>
                            <th style={{width: "30%"}}>
                                <div className="lineTH">
                                    <Button 
                                        lineStyle={{width: "20%"}} 
                                        classN="button buttonGroup"
                                        click={handleQty}
                                        value={-1}
                                    > - </Button>
                                    <Button lineStyle={{width: "40%"}} classN="lineInfo">{lineInfo.qty}</Button>
                                    <Button 
                                        lineStyle={{width: "20%"}} 
                                        classN="button buttonGroup"
                                        click={handleQty}
                                        value={1}
                                    > + </Button>
                                </div>
                                <Button classN="lineTH lineInfo">{lineInfo.qty === 0 ? `${lineInfo.unitPrice * lineInfo.bagSize} € / unité` : `${lineInfo.unitPrice * lineInfo.qty * lineInfo.bagSize} €`}</Button>
                            </th>
                            <th style={{width: "35%"}}>
                                <div style={{width: "80%", background: "green", display: "inline-block"}}>
                                    {!props.isBasket ? 
                                    <Button 
                                        lineStyle={{width: "60%"}} 
                                        classN="button"
                                        click={handleBuy}
                                    >BUY</Button> : 
                                    <Button 
                                        lineStyle={{width: "60%"}} 
                                        classN="button"
                                        click={null}
                                    >See</Button>}
                                </div>
                                <Button 
                                    lineStyle={{width: "16%", lineHeight: "1em"}} 
                                    classN="closeLine buttonGroup"
                                    click={() => handleDelete(props.line)}
                                >&#10006;</Button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default React.memo(FavLine);