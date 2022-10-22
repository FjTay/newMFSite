import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore'
import { db } from "./firebase-config";
import TeaHelper from "./TeaHelper";

const DisplayProduct = (props) => {

const history = useHistory()
const [productData, setProductData] = useState({})
const data = history.location.state.data

const getData = async () => {
    const queryCategories = doc(db, "teasDetails", history.location.state.id)
    const data = await getDoc(queryCategories)
    setProductData(data.data())
}

useEffect(() => {
    getData()
    props.handleMenuItem(history.location.state.category)
}, [])

    if(productData.technics !== undefined) {
        return (
            <>
                <div 
                    id="displayProduct" 
                    className="display"
                >
                    <div id="productDisplayLeft">

                    </div>
                    <div id="productDisplayRight">
                        <div>{data.name}</div>
                        <div>{productData.incipit && productData.incipit}</div>
                        <div>{TeaHelper.getTeaColor(data.teaColor)}{data.jardinPremier && ` - Jardin Premier`}</div>
                        <div>{data.origin && TeaHelper.getTeaOrigin(data.origin)}{data.region && ` - ${data.region}`}</div>
                        <div>{productData.description}</div>
                        <div>CONSEILS DE PREPARATION</div>
                        <div>{productData.technics[0] + " g / 20cl - " + productData.technics[1] + "°C - " + productData.technics[2] + " min"}</div>
                    </div>
                </div>
                {console.log("Display Product")}
            </>
        )
        } else {
            return <p></p>
        }
};

export default React.memo(DisplayProduct);