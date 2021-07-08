import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import './App.css';

import GridBoard from './components/GridBoard'
import NextBlock from './components/NextBlock'
import ScoreBoard from './components/ScoreBoard'
import Controls from './components/Control'
import MessagePopup from './components/MessagePopup'

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1 className="App-header">TETRIS</h1>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
      </div>
    </Provider>
  );
}

export default App;