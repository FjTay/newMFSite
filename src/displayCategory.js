import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Category from "./category";
import TitleArea from "./titleArea";

const DisplayCategory = (props) => {

    const history = useHistory()

    return (
        <>
            <div 
                id="displayCategory"
                className="display"
            >
                <TitleArea
                    title={history.location.state?.title}
                    subTitle={null}
                ></TitleArea>
                    <div>
                        {history.action !== "PUSH" && Object.entries(history.location.state.data).map(([key, value]) => {
                            return (
                                <Category
                                    category={key}
                                    key={key}
                                    requirements={value.requirements}
                                    name={value.name}
                                    title={history.location.state.title}
                                >{value.name}</Category>
                            )
                        })}
                    </div>
            </div>
            {console.log("Display Category")}
        </>
    )
};

export default DisplayCategory;


// import React, { useEffect, useState } from "react";
// import { getDoc, doc } from 'firebase/firestore'
// import { db } from "./firebase-config";
// import { useHistory, useParams } from "react-router-dom";
// import Category from "./category"

// const DisplayCategory = (props) => {

    //const [categoryData, setCategoryData] = useState([])
    // const history = useHistory()
    // const {category} = useParams()

    // const getCategoryData = async () => {
    //     setCategoryData([])
    //     const queryCategories = doc(db, "categoryItems", history.location.state)
    //     const data = await getDoc(queryCategories)
    //     const categoryList = []
    //     for (const [entry, value] of Object.entries(data.data())) {
    //         categoryList.push(
    //             <Category
    //                 category={history.location.state}
    //                 key={entry+value.origin}
    //                 origin={value.origin}
    //                 entry={entry}
    //                 name={value.name}
    //             >{value.name}</Category>
    //         )
    //     }
    //     await setCategoryData(categoryList)
    // }

    // useEffect(() => {
    //     getCategoryData()
    //     props.previousMenuItem.current !== history.location.state && props.handleMenuItem(history.location.state)
    //     props.previousMenuItem.current = history.location.state
    // }, [history.location.state])


{/* {props.previousMenuItem.current === category && categoryData} */}