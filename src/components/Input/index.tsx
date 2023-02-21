import "./style.scss";

interface Props {
  id: string;
  name: string;
  title: string;
  type?: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  errorMsg: string;
}

function Input({ id, name, title, type = "text", value, onChange, errorMsg }: Props) {
  return (
    <div className="input">
      <label>
        <p className="title">{title}</p>
        <input id={id} name={name} className={errorMsg ? "error" : ""} type={type} value={value} onChange={onChange} />
      </label>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </div>
  );
}

export default Input;
