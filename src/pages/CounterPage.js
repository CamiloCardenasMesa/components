import { useEffect, useState } from "react";
import Button from '../components/Button';

function CounterPage({ initialCounter }) {

    const [count, setCount] = useState(initialCounter);

    useEffect (() => {
        console.log(count);
    }, [count]);

    const handleClick = () => {
        setCount( count + 1);
    }

    return (
        <div>
            <h1>Counter in {count}</h1>
            <Button onClick={handleClick}>
                Increment
            </Button>
        </div>
    );

}

export default CounterPage;