import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from "./firebase-config";
import GetCategoryRequirements from "./GetCategoryRequirements";

const Category = (props) => {

    const history = useHistory()
    const {menuItem} = useParams()

    const handleCategory = async () => {
        try {
            const queryCategories = collection(db, "teas")
            const data = GetCategoryRequirements(queryCategories, props.requirements)
            const querySnapshot = await getDocs(data)
            history.push(`/menu/${menuItem}/${props.category}`);
            const dataList = []
            querySnapshot.forEach((doc) => {
                dataList.push({data : doc.data(), id: doc.id});
            });
            history.replace({
                state : {categoryData : dataList, menuItem : menuItem, title : props.title, category : props.category, subTitle : props.name}
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div 
                className="category"
                onClick={() => handleCategory()}
            >{props.children}</div>
            {console.log("Category")}
        </>
    )
};

export default Category;