import "./style.scss";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { ContactPreference } from "../../pages/DrivePage"
interface Props {
  id: string;
  title: string;
  data: ContactPreference[];
  value: string;
  setValue: (id: string, value: string) => void;
}

function Select({ id, title, value, data, setValue }: Props) {
  return (
    <div className="select">
      <p className="title">{title}</p>
      <div className="select-cont">
        <div className="select-head" tabIndex={-1}>
          <span>{value}</span>
          <KeyboardArrowDownRoundedIcon />
        </div>
        <div className="select-options">
          {data.map((item, idx) => (
            <p key={idx} onClick={() => setValue(id, item.name)}>
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
