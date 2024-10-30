"use client"
import MenuBar from "../_components/menu-bar";
import NewItem from "./new-item";
import ItemList from "./item-list";
import items from "./items.json"
import { useState } from "react";

export default function Week7()
{
    let itemsArray = items.map((item) => ({...item}));
    const [itemsList, setItemsList] = useState(itemsArray)

    const addNewItem = (newItemObject) => 
    {
        setItemsList([...itemsList, newItemObject]);
    }

    return(
        <main>
            <MenuBar/>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div>
                    <NewItem addItemFunc={addNewItem}/>
                </div>
                <div>
                    <ItemList listOfItems={itemsList}/>
                </div>
            </div>


        </main>
    )
}