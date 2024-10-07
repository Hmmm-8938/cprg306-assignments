"use client"
import React from 'react';
import { useState } from 'react';
import Counter from './counter';

const NewItem = () => {

    const [count, setCount] = useState(0);

    const incrementCounter = () =>
      {
          if (count < 20)
          {
              setCount(count + 1);
          }
      }

  const decrementCounter = () =>
      {
          if (count > 0)
          {
              setCount(count - 1);
          }
      }

    return (
        <div>
            <Counter className="p-5" currentCount={count} incrementCounterFunction={incrementCounter} decrementCounterFunction={decrementCounter}/>
        </div>
    );
};

export default NewItem;