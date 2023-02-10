import "./style.scss";

interface Props {
  children: string;
  width: string;
  option: string;
  action: () => void;
}

function Button({ children, width, option, action }: Props) {
  const STYLE =
    option === "black" ? "black" : option === "gray" ? "gray" : "blue";

  return (
    <button
      className={`btn ${STYLE}`}
      style={{ width }}
      onClick={action}
      title={children}
    >
      {children}
    </button>
  );
}

export default Button;
