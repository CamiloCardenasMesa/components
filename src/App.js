import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button success rounded outline>
                    Click here
                </Button>
            </div>
            <div>
                <Button danger outline>
                    By Now!
                </Button>
            </div>
            <div>
                <Button warning>
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