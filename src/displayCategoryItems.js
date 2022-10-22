import React, { useEffect, useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import Product from "./product";
import TitleArea from "./titleArea";
import Tags from "./tags";

const DisplayCategoryItems = (props) => {

    const [categoryData, setCategoryData] = useState(null)
    const history = useHistory()

    const tags = useMemo(() => {
        return (
            <Tags
                categoryData={categoryData}
                tags={props.tags}
            ></Tags>
        )
    }, [categoryData, props.tags])

    useEffect(() => {
        const dataList = []
        Object.entries(history.location.state.categoryData).map(([key, value]) => {
            value.data.packaging.map((packaging, index) => {
                let reference=value.data.packaging[index] + value.id
                let priceIndex=index
                dataList.push({
                    id: value.id,
                    data: {...value.data, reference, priceIndex, packaging},
                })
            })
        })
        console.log("++ Mounted Component ++")
        setCategoryData(dataList)
    }, [])

    return (
        <>  
            <div 
                className="display"
            >
                {history.action !== "PUSH" &&
                    <>
                        <TitleArea
                            title={history.location.state?.title}
                            subTitle={history.location.state?.subTitle}
                        ></TitleArea>
                        {tags}
                        <div 
                            id="displayCategoryItems" 
                            className="displayWithTags"
                        >
                            <div>
                                {categoryData?.map(product => {
                                    return (
                                        <Product
                                            data={product.data}
                                            key={product.data.reference}
                                            id={product.data.reference}
                                            handleFavs={props.handleFavs}
                                            favs={props.favs}
                                            isFav={props.favs.filter(fav => fav.reference === product.data.reference).length > 0 ? true : false}
                                        ></Product>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                }
            </div>
            {console.log("Display Category Items")}
        </>
    )
};

export default DisplayCategoryItems;

// history.action !== "PUSH" && Object.entries(categoryData).map(([key, value]) => {
//     value.data.packaging.map((packaging, index) => {
//         const reference=value.data.packaging[index] + value.id
//         const priceIndex=index
//         productList.push(
//             <Product
//                 id={value.id}
//                 reference={reference}
//                 key={reference}
//                 data={{...value.data, reference, priceIndex}}
//                 handleFavs={props.handleFavs}
//                 favs={props.favs}
//                 isFav={props.favs.filter(fav => fav.reference === reference).length > 0 ? true : false}
//             ></Product>
//         ) 
//     })
// })