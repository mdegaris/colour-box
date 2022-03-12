import "./Input.css";

const Input = ({ colour, setColour }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                onChange={(e) => {
                    console.log(e.target.value);
                    setColour(e.target.value);
                }}
                value={colour}
            />
        </form>
    );
};

export default Input;
