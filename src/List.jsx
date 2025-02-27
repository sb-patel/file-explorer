import { useState } from "react";

function List({ list }) {
    const [isExpanded, setIsExpanded] = useState({});

    return (
        <div className="container">
            {
                list.map((node) => (
                    <div key={node.id}>
                        {node.isFolder && <span onClick={() => setIsExpanded((prev) => ({
                            ...prev,
                            [node.name]: !prev[node.name],
                            }))}>{isExpanded?.[node.name] ? '-' : '+'}</span>}
                        <span>{node.name}</span>
                        {isExpanded?.[node.name] && node.children && <List list={node.children} />}
                    </div>
                ))
            }
        </div>
    )
};

export default List;