import { useState} from "react";

function Accordion({ items }) {
    const [expandedItems, setExpandedItems] = useState(0);

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedItems;

        return (
            <div key={item.id}>
                <div onClick={() => setExpandedItems(index)}>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return <div>{renderItems}</div>
}

export default Accordion;