import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';
import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button secondary rounded outline>
                    <GoBell />
                    Click here
                </Button>
            </div>
            <div>
                <Button outline success>
                    <GoCloud />
                    By Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    See Deal
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Hi there
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Someting
                </Button>
            </div>
        </div>
    );
}

export default App;