import "./style.scss";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

interface Props {
  state: boolean;
  setState: (state: boolean) => void;
}

function Checkbox({ state, setState }: Props) {
  return (
    <div
      className={`checkbox ${state ? "checked" : ""}`}
      onClick={() => setState(!state)}
    >
      <CheckRoundedIcon />
    </div>
  );
}

export default Checkbox;
