import React, { useMemo, useState} from "react";
import { useHistory, useParams } from "react-router-dom";

const Product = (props) => {

    const history = useHistory()
    const {menuItem, category} = useParams()
    const [isFav, setToFav] = useState(props.isFav)

    const handleNewFav = (newFav => {
        setToFav(!isFav)
        props.handleFavs(newFav)
    })

    const handleProduct = () => {
        history.push(`/menu/${menuItem}/${category}/${props.reference}`)
        history.replace({
            state : {
                category: category,
                data: props.data,
                id: props.id,
                reference: props.reference
            }
        })
    }

    const product = useMemo(() => {
        return (
            <>
            <div className="product" id={props.id}>
                <div
                    onClick={() => handleProduct()}
                >
                    <div className="productImageFrame"></div>
                        <img
                            className="productImage"
                            src={`${`${process.env.PUBLIC_URL}/T2/${props.data.reference}`}.jpg`} alt = {props.data.reference}
                        ></img>
                    <div
                        className="productBody"
                    >{props.data.name}
                    </div>
                </div>
                <table className="productFooter">
                    <tbody>
                        <tr>
                            <th 
                                className={isFav ? "productAddToFav fav" : "productAddToFav"} 
                                onClick={() => handleNewFav(props.data)
                            }></th>
                            <th className="button">Acheter</th>
                            <th className="productRight"></th>
                        </tr>
                    </tbody>
                </table>
            </div>
            {console.log("Product")}
            </>
        )
    }, [isFav])

    return (
        <>
            {product}
        </>
    )
}

export default Product;

    // const subProduct = useMemo(() => 
    //     <SubProduct
    //         data={props.data}
    //         newFav={props.newFav}
    //         reference={props.reference}
    //         isFav={props.isFav}
    //         handleProduct={handleProduct}
    //     ></SubProduct>
    // , [props.isFav])