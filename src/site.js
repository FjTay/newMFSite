import React, { useEffect, useCallback, useRef, useState} from "react";
import Menu from "./menu";
import "./main.css";
import MenuData from "./menuData";
import TopMenuData from "./topMenuData";
import { BrowserRouter as Router, Switch, Route, useHistory, useParams } from 'react-router-dom';
import HomePage from "./homePage";
import Footer from "./footer";
import DisplayCategory from "./displayCategory";
import Header from "./header";
import DisplayCategoryItems from "./displayCategoryItems";
import DisplayProduct from "./displayProduct";
import Favs from "./favs";
import Basket from "./basket";
import Account from "./account";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "./firebase-config";

const Site = (props) => {

    const [tags, setTags] = useState(null)
    const [selectedItem, setMenuItem] = useState(null)
    const previousMenuItem = useRef()
    const [favs, setFavs] = useState([])
    const [basket, setBasket] = useState([])
    const history = useHistory()
    const {menuItem} = useParams()

    const handleMenuItem = useCallback((menuItem) => {
        setMenuItem(menuItem)
    }, [])

    const handleFavs = (newFav) => {
        if (favs.find(fav => fav.reference === newFav.reference)) {
          deleteFav(newFav)
        } else {
          setFavs(oldfavs => [...oldfavs, newFav])
        }
    }

    const handleBasket = useCallback((newBasketLine, newQty, newBagSize) => {
        let itemIndex = basket.findIndex(line => line.reference === newBasketLine.reference && line.bagSize === newBagSize)
        if (itemIndex >= 0) {
          let newBasket = basket
          newBasket[itemIndex].qty += newQty
          newBasket[itemIndex].bagSize = newBagSize
          setBasket(newBasket)
        } else {
          newBasketLine.qty = !newQty ? 0 : newQty
          newBasketLine.bagSize = newBagSize
          setBasket(oldLines => [...oldLines, newBasketLine])
        }
    }, [basket])

    const deleteFav = useCallback((favToDelete) => {
        setFavs((currentFavs) =>
          currentFavs.filter((fav) => fav.reference !== favToDelete.reference)
        );
    }, []);

    const deleteBasketLine = useCallback((lineToDelete) => {
        setBasket((currentLines) =>
          currentLines.filter((line) => line.reference !== lineToDelete.reference)
        );
    }, []);

    useEffect(() => {
      console.log("++ Updated Component ++")
      previousMenuItem.current = history.location.state?.menuItem
      handleMenuItem(history.location.state?.menuItem)
    }, [history.location.pathname, menuItem])

    useEffect(() => {
      loadTagsData("teas")
    }, [])

    const loadTagsData = async (entry) => {
      try {
          const queryCategories = doc(db, "tags", entry)
          const data = await getDoc(queryCategories).then(doc => {
            setTags(doc.data())
          })
      } catch (error) {
          console.log(error)
      }
    }

  return (
    <>
    <div>
        <Header
          favs={favs}
          basket={basket}
          selectedItem={selectedItem}
          previousMenuItem={previousMenuItem}
          items={TopMenuData}
        ></Header>
        <Menu 
          items={MenuData}
          selectedItem={selectedItem}
          previousMenuItem={previousMenuItem}
        ></Menu>
        <div id="wrapper">
          <Switch>
            <Route 
              exact path = "/menu/:menuItem"
              render = {() => 
                <DisplayCategory
                  previousMenuItem={previousMenuItem}
                ></DisplayCategory>
            }></Route>
            <Route path = "/menu/:menuItem/:category" exact render = {() => 
                <DisplayCategoryItems
                  favs={favs}
                  handleFavs={handleFavs}
                  handleMenuItem={handleMenuItem}
                  tags={tags}
                ></DisplayCategoryItems>}>
            </Route>
            <Route path = "/menu/:menuItem/:category/:product" exact render = {() => 
                <DisplayProduct
                  handleMenuItem={handleMenuItem}
                ></DisplayProduct>}>
            </Route>
            <Route path = "/favourites" exact render = {() => 
                <Favs
                  handleMenuItem={handleMenuItem}
                  data={favs}
                  delete={deleteFav}
                  handleBasket={handleBasket}
                ></Favs>}>
            </Route>
            <Route path = "/basket" exact render = {() => 
                <Basket
                  handleMenuItem={handleMenuItem}
                  data={basket}
                  delete={deleteBasketLine}
                  handleBasket={handleBasket}
                ></Basket>}>
            </Route>
            <Route path = "/account" exact render = {() => 
                <Account
                  handleMenuItem={handleMenuItem}
                ></Account>}>
            </Route>
            <Route 
              exact path="/" 
              render = {() => 
                <HomePage
                  handleMenuItem={handleMenuItem}
                ></HomePage>
            }></Route>
          </Switch>
        </div>
      <Footer></Footer>
    </div>
    {console.log("Site")}
    </>
  );
}

export default Site;