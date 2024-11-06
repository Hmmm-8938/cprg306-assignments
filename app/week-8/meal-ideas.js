"use client"
import {useEffect, useState } from "react";

export default function MealIdeas()
{
    const [mealIDS, setMealIDS] = useState([]);
    const [mealNames, setMealNames] = useState([]);
    const [mealPhotos, setMealPhotos] = useState([]);

    async function fetchMealIdeas(ingredient)
    {
        try
        {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            if ( !response.ok ) console.log(response.statusText);
            const data = await response.json();
            console.log(data);
        }
        catch (error)
        {
            console.log(`Error: ${error.message}`);
        }
    }

    function displayIdeas()
    {

    }

    return(
        <div onClick={closeFormFunc} className="absolute w-full h-full bg-gray-700/60 flex items-center justify-center z-10">
            <form onClick={(event) => event.stopPropagation()} className="bg-green-400 text-black p-5 rounded-lg max-w-md"onSubmit={handleSubmit}>
                <h2 className="text-2xl text-center mb-2">Add a new dog for adoption.</h2>
                <div className="mb-2">
                    <label className="inline-block w-40">ID:</label>
                    <input type="text" value={id} onChange={handleIdChange}></input>
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Name:</label>
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Breed:</label>
                    <input type="text" value={breed} onChange={(event) => setBreed(event.target.value)}></input>
                </div>
                <div className="mb-2">
                    <label className="inline-block w-40">Photo URL:</label>
                    <input type="text" value={photoUrl} onChange={(event) => setPhotoUrl(event.target.value)}></input>
                </div>
                <button className="bg-green-700 text-white rounded px-1"type="submit">
                Add New Dog
                </button>
                <button type="button" onClick={closeFormFunc} className="bg-blue-700 text-white rounded px-1 ml-3">Close Form</button>
            </form>
        </div>
    )
}