import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };

    const options = [
        { label: 'Red color', value: 'red'},
        { label: 'Green color', value: 'green'},
        { label: 'Blue color', value: 'blue'},
    ];

    return (
        <div className="flex">
            <Dropdown options={options} value={selection} onChange={handleSelect} />
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>     
    );
}

export default App;
