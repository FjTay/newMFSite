import React, { useCallback, useState } from "react";
import Button from "./button";

const Line = (props) => {

    const [lineInfo, setLineInfo] = useState({
        unitPrice: props.line.price[props.line.priceIndex],
        qty: !props.isBasket ? 0 : props.line.qty,
        bagSize: !props.isBasket ? 1 : props.line.bagSize
    })

    const seeProduct = () => {
        alert("fonction qui redirige vers la page du produit")
    }

    const handleDelete = useCallback((line) => {
        props.delete(line);
    }, [props]);

    const handleQty = (newQty) => {
        if(lineInfo.qty === 0 && newQty === -1) {return}
        setLineInfo(oldInfo => ({...oldInfo, qty: oldInfo.qty + newQty}))
        props.isBasket && props.handleBasket({...props.line, ...lineInfo}, newQty, lineInfo.bagSize)
    }

    const handleBagSize = (newBagSize) => {
        !props.isBasket && setLineInfo({...lineInfo, bagSize: newBagSize})
        props.isBasket && props.handleBasket({...props.line, ...lineInfo}, false, newBagSize)
    }

    const handleBuy = useCallback(() => {
        lineInfo.qty > 0 && props.handleBasket({...props.line, ...lineInfo}, lineInfo.qty, lineInfo.bagSize)
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
                                {props.line.packaging === "T" && 
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
                                </div>}
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
                                        click={seeProduct}
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

export default React.memo(Line);