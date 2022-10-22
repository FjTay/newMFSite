import React, { useState } from "react";

const SubProduct = (props) => {

    const [isFav, setToFav] = useState(false)

    const handleNewFav = (newFav => {
        setToFav(!isFav)
        props.newFav.current.push(newFav)
    })

    return (
        <div className="product">
            <div
                className="productBody"
                onClick={() => props.handleProduct()}
            >{props.data.name}</div>
            <table className="productFooter">
                <tbody>
                    <tr>
                        <th 
                            className={isFav ? "productAddToFav fav" : "productAddToFav"} 
                            onClick={() => handleNewFav(props.data.name)
                        }></th>
                        <th className="productBuy">Acheter</th>
                        <th className="productRight"></th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SubProduct;