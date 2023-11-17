import { useEffect, useState } from 'react';
import './App.css';
import { getKaiju } from './getKaiju';

function App() {
  // simulates a fetch call
  const [data, setData] = useState([]);

  useEffect(() => {

    getKaiju()
      .then(
        (Response) => Response.json())
      .then((res) => { setData(res.default) })
  }, [])

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kaiju Search</h1>
        <ul>
          {data.map(obj =>
            <li>{obj.name}</li>
          )}
        </ul>
      </header>
    </div>
  );
}

export default App;
