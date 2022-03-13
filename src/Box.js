import "./base.css";
import "./Box.css";

const Box = ({ colour }) => {
  const colourValue = colour ? colour : "white";
  const colourText = colour ? colour : "Empty Value";

  return (
    <section
      className="box shadowed-border"
      style={{ backgroundColor: colourValue }}
    >
      <span>{colourText}</span>
    </section>
  );
};

export default Box;
