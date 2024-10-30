"use client"
import React from 'react';
import { useState } from 'react';
import Counter from './counter';

const NewItem = ({addItemFunc}) => {

    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("categoryDisabled");

    const handleItemNameChange = (event) => setItemName(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);
    
    const incrementCounter = () =>
      {
          if (quantity < 20)
          {
              setQuantity(quantity + 1);
          }
      }

  const decrementCounter = () =>
      {
          if (quantity > 0)
          {
              setQuantity(quantity - 1);
          }
      }

  const handleSubmit = (event) => 
    {
       event.preventDefault();
    
       if (category === "categoryDisabled")
       {    
        alert(`Please choose a category!`);
       }
       else
       {
        const randomId = Math.random().toString(36).substring(2, 10);
        let newItem =
        {
          id: randomId,
          name: itemName,
          quantity: quantity,
          category: category,
        }
        addItemFunc(newItem);
       }
       setItemName("");
       setQuantity("");
       setCategory("categoryDisabled");
    }

    return (
        <form onSubmit={handleSubmit} className='bg-gray-600 p-5 rounded-3xl border mt-5'>
            <div className='mb-5'>
                <label className='inline-block w-52 h-5 text-black font-black'>Item Name: </label>
                <input className='bg-slate-500 ml-5 px-2 py-0.5 rounded border border-blue-500' type='text' required={true} onChange={handleItemNameChange} value={itemName}></input>
            </div>
            <div className='mb-5'>
                <Counter className="p-5" currentCount={quantity} incrementCounterFunction={incrementCounter} decrementCounterFunction={decrementCounter}/>
            </div>
            <div className='mb-5'>
                <label className='inline-block w-52 h-5 text-black font-black'>Category: </label>
                <select className='bg-slate-500 ml-5 px-2 py-0.5 rounded border border-blue-500' onChange={handleCategoryChange} value={category} required>
                    <option value='categoryDisabled' disabled>-- Please select a category --</option> 
                    <option value='produce'>Produce</option>
                    <option value='dairy'>Dairy</option>
                    <option value='bakery'>Bakery</option>
                    <option value='meat'>Meat</option>
                    <option value='frozen-foods'>Frozen Foods</option>
                    <option value='canned-foods'>Canned Foods</option>
                    <option value='dry-goods'>Dry Goods</option>
                    <option value='beverages'>Beverages</option>
                    <option value='snacks'>Snacks</option>
                    <option value='household'>Household</option>
                    <option value='other'>Other</option>
                </select>
            </div>
            <div className='mb-5'>
                <button className='inline-block w-full h-10 px-2 py-1 rounded border border-blue-500 bg-green-500 text-black font-black hover:bg-green-900' type="submit">+</button>
            </div>
        </form>
    );
};

export default NewItem;