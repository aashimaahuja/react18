import * as React from 'react';
import { useEffect } from 'react';

export const UseEffectDemo = () => {
  useEffect(() => {
    function handleClick() {
      console.log('hello world !');
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      <h1> Hello World</h1>
    </div>
  );
};
