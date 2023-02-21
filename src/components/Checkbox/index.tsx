import "./style.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

interface Props {
  id: string;
  value: boolean;
  setValue: (id: string, value: boolean) => void;
}

function Checkbox({ id, value, setValue }: Props) {
  return (
    <div
      className={`checkbox ${value ? "checked" : ""}`}
      onClick={() => setValue(id, !value)}
    >
      <CheckRoundedIcon />
    </div>
  );
}

export default Checkbox;
