"use client"
import MenuBar from "../_components/menu-bar";
import ItemList from "./item-list";
import items from "./items.json"
import { useState } from "react";


export default function ShoppingList()
{
    let itemsArray = items.map((item) => ({...item}));
    const [itemsList, setItemsList] = useState(itemsArray)

    const addNewItem = (newItemObject) => {
        setItemsList([...itemsList, newItemObject]);
    }
    return(
        <main>
            <MenuBar/>
            <ItemList listOfItems={itemsList}/>
        </main>
    )
}