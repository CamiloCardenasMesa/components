import Dropdown from "./components/Dropdown";

function App() {
    const options = [
        { label: 'Red color', value: 'red'},
        { label: 'Green color', value: 'green'},
        { label: 'Blue color', value: 'blue'},
    ];

    return <Dropdown options={options} />;
}

export default App;