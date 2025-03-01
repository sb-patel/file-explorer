import { useState } from "react";

function List({ list, addNodeToList, deleteNodeFromList }) {
    const [isExpanded, setIsExpanded] = useState({});

    return (
        <div className="container">
            {
                list.map((node) => (
                    <div key={node.id}>
                        {node.isFolder && <span onClick={() => setIsExpanded((prev) => ({
                            ...prev,
                            [node.name]: !prev[node.name],
                            }))}>{isExpanded?.[node.name] ? '- ' : '+ '}</span>}
                        <span>{node.name}</span>
                        {node.isFolder && <div className="icon-container" onClick={() => addNodeToList(node.id)}>
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/5994/5994754.png"
                            className="icon"
                            />
                            <span className="tooltip">New Folder</span>
                        </div>}
                        <div className="icon-container" onClick={() => deleteNodeFromList(node.id)}>
                            <img
                            src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png"
                            className="icon"
                            />
                            <span className="tooltip">Delete</span>
                        </div>
                        {isExpanded?.[node.name] && node.children && <List list={node.children} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>}
                    </div>
                ))
            }
        </div>
    )
};

export default List;