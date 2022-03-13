import "./base.css";
import "./Input.css";

const Input = ({ colour, setColour }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        className="shadowed-border"
        type="text"
        placeholder="Enter colour name"
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
