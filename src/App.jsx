import { useState } from "react"
import json from "../data.json"
import './App.css'
import List from "./List";

function App() {
  const [data, setData] = useState(json);

  return (
    <div className="App">
      <h1>File/Folder Explorer</h1>
      <List list={data} />
    </div>
  )
}

export default App