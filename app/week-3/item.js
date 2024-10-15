import React from 'react';

const Item = ({name, quantity, category}) => {
    return (
        <li>
            {/* I have additionally added an extra checkbox so you can check off items as you shop.*/}
            <div className='text-3xl ml-10 bg-gray-900 h-24 w-9/12 justify-center hover:text-7xl '><text className='mr-5 text-7xl'>.</text>{name}     {quantity}     {category} <input type="checkbox" className='transform scale-150 ml-5'/></div>
        </li>
    );
};

export default Item;