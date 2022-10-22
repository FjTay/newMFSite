import React from "react";
import Product from "./product";

const Liste = (props) => {

    const categoryItemDataList=[]

    props.data.forEach(doc => {
        const data = doc.data()
        for (let i = 0; i < data.packaging.length; i++) {   
            const reference = data.packaging[i] + doc.id
            const priceIndex=i
            const productData = {
                id: doc.id,
                reference: reference,
                key: reference,
                data: {...data, reference, priceIndex},
                handleFavs: props.handleFavs,
                favs: props.favs,
                isFav: props.favs.filter(fav => fav.reference === reference).length > 0 ? true : false
            }
            categoryItemDataList.push(
                <Product
                    {...productData}
                ></Product>
            )
        }
    })

    return (
        <>  <div>
                {categoryItemDataList}
            </div>
            {console.log("Liste")}
        </>
    )
};

export default Liste;