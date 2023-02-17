import "./style.scss";

interface Props {
  className?: string;
  children: string;
  width?: string;
  option?: string;
  action?: () => void;
}

function Button({ className, children, width = "100%", option, action }: Props) {
  const STYLE =
    option === "black" ? "black" : option === "gray" ? "gray" : "blue";

  return (
    <button
      className={`btn ${className} ${STYLE}`}
      style={{ width }}
      onClick={action}
      title={children}
    >
      {children}
    </button>
  );
}

export default Button;
