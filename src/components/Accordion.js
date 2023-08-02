import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState} from "react";

function Accordion({ items }) {
    const [expandedItems, setExpandedItems] = useState(0);

    const handleClick = (nextIndex) => {
        setExpandedItems(nextIndex);
    };

    const renderItems = items.map((item, index) => {
        const isExpanded = index === expandedItems;

        const icon = (
        <span className="text-2xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>
        );

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderItems}</div>
}

export default Accordion;