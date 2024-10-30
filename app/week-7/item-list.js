"use client"
import ItemCard from "./itemCard"
import { useState } from "react"

export default function ItemList ({listOfItems})
{
    const [sortBy, setSortBy] = useState("id")

    listOfItems.sort( (a, b) => {
        if (isNaN(parseInt(a[sortBy])) && a[sortBy] && b[sortBy])
        {
            //sorting alphabetically
            let nameA = a[sortBy].toUpperCase();
            let nameB = b[sortBy].toUpperCase();
            if (nameA < nameB)
            {
                return -1;
            }
            else if (nameA > nameB)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
        else
        {
            return a.id - b.id;
        }
    });

    const handleChangeSort = (event) => setSortBy(event.target.value);
    return(
        <section className="p-5">
            <h1 className="text-6xl mb-3 text-center">Shopping List</h1>
            <div className="justify-center mx-auto max-w-4xl mb-5 text-black">
                <button 
                    value="name" 
                    className={`h-20 w-52 font-black text-xl text-white mr-10 
                        ${sortBy === "name" ? "bg-orange-500" : "bg-orange-700"}`}
                    onClick={handleChangeSort}
                >
                    Sort By Name
                </button>
                <button 
                    value="category" 
                    className={`h-20 w-52 font-black text-xl text-white mr-10 
                        ${sortBy === "category" ? "bg-orange-500" : "bg-orange-700"}`}
                    onClick={handleChangeSort}
                >
                    Sort By Category
                </button>
            </div>
            <div className="justify-center mx-auto max-w-4xl">
                {listOfItems.map((item) => (
                    <ItemCard itemObj={item} key ={item.id}></ItemCard>
                ))}
            </div>
        </section>
    )
}