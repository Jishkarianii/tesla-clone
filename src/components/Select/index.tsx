import "./style.scss";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

interface Props {
  title: string;
  data: string[];
  state: string;
  setState: (value: string) => void;
}

// add scrollbar for much data 

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
            <p key={idx} onClick={() => setState(item)}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Select;
