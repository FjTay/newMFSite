import React from "react";
import MenuItem from "./menuItem";

const Menu = (props) => {

    const menuItemList = []

    for (const [entry, value] of Object.entries(props.items)) {
        menuItemList.push(
            <MenuItem
                handleMenuItem={props.handleMenuItem}
                previousMenuItem={props.previousMenuItem}
                key={entry}
                entry={entry}
                value={value.value} 
                classN={props.selectedItem === entry ? "menuItem selected" : "menuItem"}
            ></MenuItem>
        )
    }

    return (
        <>  <div id="menuWrapper">
                <table id="menu">
                    <tbody>
                        <tr>
                            {menuItemList}
                        </tr>
                    </tbody>
                </table>
            </div>
            {console.log("menu")}
        </>
    )
};

export default React.memo(Menu);
