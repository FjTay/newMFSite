import React from "react";
import { useHistory } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore'
import { db } from "./firebase-config";

const MenuItem = (props) => {

    const history = useHistory()

    const handleClick = async () => {
        if(props.entry !== props.previousMenuItem.current) {
            try {
                const queryCategories = doc(db, "categoryItems", props.entry)
                const data = await getDoc(queryCategories).then(doc => {
                    history.push(`/menu/${props.entry}`);
                    history.replace({
                        state : {data : {...doc.data()}, menuItem : props.entry, title : props.value}
                    });
                    props.previousMenuItem.current = props.entry
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>
            <th
                onClick={() => handleClick()}
                className={props.classN}
            >{props.value}</th>
            {console.log("render du MenuItem")}
        </>
    )
};

export default React.memo(MenuItem);