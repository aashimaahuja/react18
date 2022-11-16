import * as React from 'react';
import { useState, useEffect, useTransition } from 'react';
import './style.css';

export const TransitionDemo = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = React.useState([]);
  const [filter, setFilter] = useState('');

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    let itemsArr = [];
    for (let i = 0; i < 50000; i++) {
      itemsArr.push(`Item ${i}`);
    }

    startTransition(() => {
      setItems([...itemsArr]);
      setFilteredItems([...itemsArr]);
    });
  }, []);

  const filterItems = (e) => {
    const value = e.target.value;
    const filteredItems = items.filter((item) => item.includes(value));

    setFilter(value);
    startTransition(() => {
      setFilteredItems([...filteredItems]);
    });
  };

  return (
    <div>
      <input
        className="searchbox"
        onChange={filterItems}
        placeholder="Search"
      />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
