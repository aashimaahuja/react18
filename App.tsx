import * as React from 'react';
import { useState } from 'react';
import SuspenseDemo from './SuspenseDemo';
import { TransitionDemo } from './TranistionDemo';
import './style.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('suspenseDemo');

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === 'transitionDemo' ? 'active' : null}
          onClick={() => setActiveTab('transitionDemo')}
        >
          Transition Demo
        </button>
        <button
          className={activeTab === 'suspenseDemo' ? 'active' : null}
          onClick={() => setActiveTab('suspenseDemo')}
        >
          Suspense Demo
        </button>
      </div>

      {activeTab === 'transitionDemo' ? <TransitionDemo /> : <SuspenseDemo />}
    </div>
  );
}
