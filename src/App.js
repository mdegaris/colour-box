import { useState } from "react";
import "./App.css";
import Box from "./Box";
import Input from "./Input";

function App() {
    const [colour, setColour] = useState("");

    return (
        <div>
            <Box colour={colour} />
            <Input colour={colour} setColour={setColour} />
        </div>
    );
}

export default App;
