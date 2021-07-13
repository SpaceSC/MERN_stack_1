import { useState, useEffect} from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [res, setRes] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/dog')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => setData(null))
  }, [])

  const submit = () => {
    fetch('http://localhost:5000/dog', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // input1: input1 is the same as input1
        input1,
        input2
      })
    }).then(res => res.json())
      .then(data => setRes(data))
      .catch(err => setRes(false))
  }

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data.map(res => res.input1)}</p>

        <input type="text" onChange={e => setInput1(e.target.value)}/>
        <input type="text" onChange={e => setInput2(e.target.value)}/>
        <button onClick={submit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
