import { Button } from "react-bootstrap";

const hello = () => {
    alert("Hello World");
};
const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};
export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>
            <Button onClick={hello} id="hello-world-click" className="btn">
                Hello World!
            </Button>
            <Button onClick={() => lifeIs("Good!")} id="wd-lie-is-good-click" className="btn">
                Life is Good!
            </Button>
            <Button onClick={() => {
                hello();
                lifeIs("Great!");
            }} id="wd-lfie-is-great-click" className="btn">Life is Great!</Button> <hr/>
        </div>
    );
}