import "./Box.css";

const Box = ({ colour }) => {
    console.log(colour);

    return (
        <div className='box' style={{ backgroundColor: colour }}>
            {colour ? colour : "Empty Value"}
        </div>
    );
};

export default Box;
