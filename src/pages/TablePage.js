import Table from "../components/Table";

function TablePage() {
    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 5},
    ];

    const config = [
        { label: 'name' },
        { label: 'color' },
        { label: 'score' },
    ];

    return (
        <div>
            <Table data={data} config={config} />
        </div>
    );
}

export default TablePage;