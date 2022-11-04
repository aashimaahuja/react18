import * as React from 'react';
import { useState, useEffect, useTransition } from 'react';
import './style.css';

export default function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = React.useState([]);
  const [isPending, startTransition] = useTransition();

  // const items = [];
  useEffect(() => {
    let itemsArr = [];
    for (let i = 0; i < 50000; i++) {
      itemsArr.push(`Item ${i}`);
    }


    startTransition(() => {
      setItems([...itemsArr]);
      setFilteredItems([...itemsArr]);
    }, [])
  }, []);

  const filterItems = (e) => {
    const value = e.target.value;
    console.log(items);
    const filteredItems = items.filter((item) => item.includes(value));
    console.log(filteredItems);

    startTransition(() => {
      setFilteredItems([...filteredItems]);
    });
  };

  return (
    <div>
      <input type="text" onChange={filterItems} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {filteredItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
