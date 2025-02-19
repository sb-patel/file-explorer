import { useState } from "react";
const [isExpanded, setIsExpanded] = useState(false);

const List = ({ list }) => (
    <div className="container">
        {
            list.map((node) => (
                <div key={node.id}>
                    {node.isFolder && <span onClick={() => setIsExpanded((prev) => !prev)}>+</span>}
                    <span>{node.name}</span>
                    {isExpanded && node.children && <List list={node.children} />}
                </div>
            ))
        }
    </div>
)

export default List;