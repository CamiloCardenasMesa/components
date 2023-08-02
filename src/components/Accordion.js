import { useState} from "react";

function Accordion({ items }) {
    const [expandedItems, setExpandedItems] = useState(0);

    const handleClick = (nextIndex) => {
        setExpandedItems(nextIndex);
    };

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedItems;

        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)}>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return <div>{renderItems}</div>
}

export default Accordion;