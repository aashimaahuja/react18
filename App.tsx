import * as React from 'react';
import { useState } from 'react';
import SuspenseDemo from './SuspenseDemo';
import { TransitionDemo } from './TranistionDemo';
import './style.css';
import DeferredValueDemo from './DefferedValueDemo';

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
          className={activeTab === 'deferredValueDemo' ? 'active' : null}
          onClick={() => setActiveTab('deferredValueDemo')}
        >
          DeferredValue Demo
        </button>
        <button
          className={activeTab === 'suspenseDemo' ? 'active' : null}
          onClick={() => setActiveTab('suspenseDemo')}
        >
          Suspense Demo
        </button>
      </div>

      {activeTab === 'transitionDemo' && <TransitionDemo />}
      {activeTab === 'deferredValueDemo' ?  <DeferredValueDemo /> :
      <SuspenseDemo />}
    </div>
  );
}
