import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";

const HomePage = (props) => {

    const history=useHistory()

    useEffect(() => {
        props.handleMenuItem(history.location.state)
    }, [])

    return (
        <>
            <div 
                id="homepage" 
                className="display"
            >Accueil</div>
            {console.log("HomePage")}
        </>
    )
};

export default React.memo(HomePage);