"use client"
import MenuBar from "../_components/menu-bar";
import NewItem from "./new-item";
import ItemList from "./item-list";
import items from "./items.json"
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Week8()
{
    let itemsArray = items.map((item) => ({...item}));
    const [itemsList, setItemsList] = useState(itemsArray)
    const [showForm, setShowForm] = useState(false);

    const openForm = () => setShowForm(true);
    const closeForm = () => setShowForm(false);

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
            {showForm && <MealIdeas addNewDogFunc={addNewItem} closeFormFunc={closeForm}/>}
            <div className="absolute top-10 right-5 z-0 w-8 h-8 rounded-full overflow-hidden">
                <button className="bg-blue-700 text-white text-3xl w-full h-full leading-none" type="button" onClick={openForm}>+</button>
            </div>


        </main>
    )
}