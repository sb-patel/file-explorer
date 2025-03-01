import { useState } from "react"
import json from "../data.json"
import './App.css'
import List from "./List";

function App() {
  const [data, setData] = useState(json);
  const addNodeToList = (parentId) => {
    const name = prompt("Enter Name")
    const updateTree = (list) => {
      return list.map(node => {
        if(node.id === parentId){
          return {
            ...node,
            children : [...node.children, {id: Date.now().toString(), name: name, isFolder: true, children:[]}]
          }
        }
        else if(node.children){
          return {...node, children: updateTree(node.children)};
        }
        return node;
      })
    }

    setData((prev) => updateTree(prev));
  }

  const deleteNodeFromList = (itemId) => {
    const updateList = (list) => {
      return list.
        filter((node) => node.id !== itemId).
        map((node) => {
          if(node.children){
            return {...node, children: updateList(node.children)};
          }
          return node;
        })
    }

    setData((prev) => updateList(prev));
  }

  return (
    <div className="App">
      <h1>File/Folder Explorer</h1>
      <List list={data} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>
    </div>
  )
}

export default App