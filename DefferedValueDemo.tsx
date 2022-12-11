import * as React from 'react';
import { useState } from 'react';
import './style.css';

const ItemList = ({ value }) => {
  const result = Array(90000)
    .fill(1)
    .map((_, index) => {
      return <li key={index}>{value + index}</li>;
    });
  return <ul className="itemlist">{result}</ul>;
};

const MemoedList = React.memo(ItemList);

export default function DeferredValueDemo() {
  const [value, setValue] = useState(0);
  const deferredValue = React.useDeferredValue(value);
  const isPending = deferredValue !== value

  return (
    <div style={{ height: '100vh', overflow: 'scroll', marginTop: '64px' }}>
      <button
        style={{
          margin: '16px',
          padding: '16px',
          width: '100px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
        onClick={() => {
          setValue((prevValue) => prevValue + 1);
        }}
      >
        {value}
      </button>
      <div
        style={{
          opacity: isPending ? 0.5 : 1,
        }}
      >
        <MemoedList value={deferredValue} />
      </div>
    </div>
  );
}
