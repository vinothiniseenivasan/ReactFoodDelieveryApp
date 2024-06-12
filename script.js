import react from "react";
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById("root"));

const FunctionComponent = () => (
    <div>
        <h1> Food App</h1>
    </div>
)

root.render(<FunctionComponent/>)