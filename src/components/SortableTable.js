import Table from "./Table";

function SortableTable(props) {
    const  { config } = props;

    const updateConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
           ...column,
           header: () => <th>{column.label}</th> 
        };
    });

    return <Table {...props} config={updateConfig}/>;
}

export default SortableTable;