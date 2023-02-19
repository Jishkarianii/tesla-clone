import "./style.scss";

interface Props {
  title: string;
  type?: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  errorMsg: string;
}

function Input({ title, type = "text", value, onChange, errorMsg }: Props) {
  return (
    <div className="input">
      <label>
        <p className="title">{title}</p>
        <input className={errorMsg ? "error" : ""} type={type} value={value} onChange={onChange} />
      </label>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </div>
  );
}

export default Input;
