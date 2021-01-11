import './App.css';
import photosJSON from './data.json';
import MyPhoto from './components/MyPhoto';
import { useState } from 'react';
import { shuffledArray } from './util';

function App() {
  const [photos, setPhotos] = useState(photosJSON.map(i => {
    return {
      ...i,
      date: new Date(i.date)
    }
  }));

  return (
    <div className="App">
      <button onClick={
        () => {
          photos.sort((a, b) => a.title.localeCompare(b.title));
          setPhotos([...photos]);
        }
      }>Sort by title</button>

      <button onClick={
        () => {
          photos.sort((a, b) => a.date - b.date);
          setPhotos([...photos]);
        }
      }>Sort by date</button>

      <button onClick={
        () => {
          setPhotos(shuffledArray(photos));
        }
      }>Shuffle</button>

      <div class="Photos">
        {photos.map((i, j) => <MyPhoto key={j} {...i} />)}
      </div>
    </div >
  );
}

export default App;
