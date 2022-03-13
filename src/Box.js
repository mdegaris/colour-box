import colourNametoHex from "colornames";
import "./base.css";
import "./Box.css";

const Box = ({ colour }) => {
    console.log(colourNametoHex(colour));
    const colourValue = colourNametoHex(colour)
        ? colourNametoHex(colour)
        : "white";

    const colourText = colour ? colour : "Empty Value";

    return (
        <section
            className='box shadowed-border'
            style={{ backgroundColor: colourValue }}>
            <span>{colourText}</span>
        </section>
    );
};

export default Box;
