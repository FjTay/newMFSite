import React from "react";
import TopMenuItem from "./topMenuItem";
import { useHistory } from "react-router-dom";

const Header = (props) => {

    const topMenuItemList = []

    for (const [entry, value] of Object.entries(props.items)) {
        topMenuItemList.push(
            <TopMenuItem 
                key={entry}
                entry={entry}
                value={value.value}
                previousMenuItem={props.previousMenuItem}
                favs={props.favs}
                basket={props.basket}
                // IMPORTANT !! le fait de changer la class du TopMenuItem ici et non DANS le TopMenuItem 
                // en transmettant le props "selectedItem" évite les render systématiques
                classN={props.selectedItem === entry ? "topMenuItemSelected" : "topMenuItem"}
            ></TopMenuItem>
        )
    }

    const history = useHistory()
    
    const handleClick = () => {
        history.push(`/`)
        props.handleMenuItem("homePage")
    }

    return (
        <>
            <div id="headerWrapper">
                <div id="header">
                    <div id="headerLeft"></div>
                    <div id="headerCenter">
                        {/* <div
                            id={history.location.state === undefined ? "mainLogoSelected" : "mainLogo"}
                            onClick = {() => handleClick()}    
                        >Main Logo</div> */}
                    </div>
                    <div id="headerRight">
                        <div id="topMenu">
                            {topMenuItemList}
                        </div>
                    </div>
                </div>
            </div>
            {console.log("Header")}
        </>
    )
};

export default React.memo(Header);