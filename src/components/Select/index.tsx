import "./style.scss";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { ContactPreference } from "../../pages/DrivePage"
interface Props {
  title: string;
  data: ContactPreference[];
  state: string;
  setState: (value: string) => void;
}

function Select({ title, state, data, setState }: Props) {
  return (
    <div className="select">
      <p className="title">{title}</p>
      <div className="select-cont">
        <div className="select-head" tabIndex={-1}>
          <span>{state}</span>
          <KeyboardArrowDownRoundedIcon />
        </div>
        <div className="select-options">
          {data.map((item, idx) => (
            <p key={idx} onClick={() => setState(item.name)}>
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
