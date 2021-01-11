import './App.css';
import { useState } from 'react';
import NumberList from './components/NumberList';
import { fillArray, randInt } from './util';

function gen() {
  return fillArray(10, () => randInt(0, 100));
}

function App() {
  const [numbers, setNumbers] = useState(gen);
  const [isTable, setIsTable] = useState(false);

  return (
    <div className="App">
      <NumberList {...{ numbers, setNumbers, table: isTable }} />
      <button onClick={() => setNumbers(gen)}>Generate</button>
      <button onClick={() => setIsTable(!isTable)}>
        Table
      </button>
    </div>
  );
}

export default App;
