import "./style.scss";
import { useState, useEffect } from "react";
import { phoneCodeList } from "../../data/phoneNumberCode";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

interface Props {
  id: string;
  title: string;
  setValue: (id: string, value: string) => void;
  errorMsg: string;
}

function PhoneNumberInput({ id, title, setValue, errorMsg }: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [code, setCode] = useState<string>(phoneCodeList[230].dial_code);
  const [number, setNumber] = useState<string>("");
  const [phoneCode, setPhoneCode] = useState<string>(
    `${phoneCodeList[230].code} ${phoneCodeList[230].dial_code}`
  );

  useEffect(() => {
    setValue(id, `${code}${number}`);
  }, [code, number]);

  return (
    <div className="phone-number-input">
      <p className="title">{title}</p>
      <div
        className={`select-phone-code ${isFocused ? "focused" : ""} ${
          errorMsg ? "error" : ""
        }`}
        tabIndex={-1}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <div className="select-phone-code-head" tabIndex={-1}>
          <span>{phoneCode}</span>
          <KeyboardArrowDownRoundedIcon />
        </div>
        <input
          type="text"
          value={number}
          placeholder="Phone Number"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setNumber(e.currentTarget.value)
          }
        />
        <div className="select-phone-code-options">
          {phoneCodeList.map((item, idx) => (
            <p
              key={idx}
              onClick={() => {
                setPhoneCode(`${item.code} ${item.dial_code}`);
                setCode(item.dial_code);
              }}
            >
              {item.code} {item.name} {item.dial_code}
            </p>
          ))}
        </div>
      </div>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
    </div>
  );
}

export default PhoneNumberInput;
