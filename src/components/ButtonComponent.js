import "../styles/ButtonStyle.css";

export default function Button({ Text, fun, Value, style }) {
  return (
    <button style={style} className="btn" name={Value} onClick={fun}>
      {Text}
    </button>
  );
}
