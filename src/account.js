import React from "react";
import { useHistory } from "react-router-dom";
import TitleArea from "./titleArea";

const Account = (props) => {

    const history=useHistory()
    
    return(
        <>
            <div 
                id="account" 
                className="display"
            >
                <TitleArea
                    title={history.location.state?.title}
                    subTitle={history.location.state?.subTitle}
                ></TitleArea>
            </div>
            {console.log("Account")}
        </>
    )
};

export default Account;