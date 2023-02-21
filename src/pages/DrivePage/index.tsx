import "./style.scss";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Input from "../../components/Input";
import Select from "../../components/Select";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import Checkbox from "../../components/Checkbox";
import { regionList } from '../../data/allCountryRegion'

interface Tesla {
  img: string;
}
const tesla: Tesla[] = [
  { img: "../../assets/Model3/model-3-demo.jpg" },
  { img: "../../assets/ModelY/model-Y-demo.jpg" },
  { img: "../../assets/ModelS/model-S-demo.jpg" },
  { img: "../../assets/ModelX/model-X-demo.jpg" },
];

export interface ContactPreference {
  name: string;
}

const contactPreference: ContactPreference[] = [
  { name: "Phone" },
  { name: "Email" },
];

function DrivePage() {
  const { carId } = useParams<string>();
  const [selectedCarIdx, setSelectedCarIdx] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [select, setSelect] = useState<string>(contactPreference[0].name);
  const [selectRegion, setSelectRegion] = useState<string>(regionList[229].name);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [checkbox, setCheckbox] = useState<boolean>(false);

  useEffect(() => {
    if (carId) {
      setSelectedCarIdx(parseInt(carId));
    }
  }, []);

  return (
    <div className="drive-page">
      <Header />
      <div className="drive-page-cont">
        <div className="drive-page-cont-head">
          <h1>Schedule a Demo Drive</h1>
          <p>
            Demo Drive a Tesla at a store near you. Drivers must have a valid
            U.S. driver's license and be 18 years of age or older.
          </p>
        </div>
        <div className="drive-page-cont-slider">
          <Fade triggerOnce>
            <div className="drive-page-cont-slider-photo">
              <img src={tesla[selectedCarIdx].img} alt="tesla" />
            </div>
          </Fade>
          <div className="drive-page-cont-slider-btns">
            <Button
              className={`btn ${selectedCarIdx === 0 ? "active" : ""}`}
              option="gray"
              action={() => setSelectedCarIdx(0)}
            >
              Model 3
            </Button>
            <Button
              className={`btn ${selectedCarIdx === 1 ? "active" : ""}`}
              option="gray"
              action={() => setSelectedCarIdx(1)}
            >
              Model Y
            </Button>
            <Button
              className={`btn ${selectedCarIdx === 2 ? "active" : ""}`}
              option="gray"
              action={() => setSelectedCarIdx(2)}
            >
              Model S
            </Button>
            <Button
              className={`btn ${selectedCarIdx === 3 ? "active" : ""}`}
              option="gray"
              action={() => setSelectedCarIdx(3)}
            >
              Model X
            </Button>
          </div>
        </div>
        <div className="drive-page-form-cont">
          <h2>Contact Information</h2>
          <form>
            <div className="form-cont">
              <Input
                title="First Name"
                errorMsg="required"
                value={name}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setName(e.currentTarget.value)
                }
              />
              <Input
                title="Last Name"
                errorMsg="required"
                value={name}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setName(e.currentTarget.value)
                }
              />
              <Select
                title="Contact Preference"
                state={select}
                setState={setSelect}
                data={contactPreference}
              />
              <PhoneNumberInput
                title="Phone Number"
                state={phoneNumber}
                setState={setPhoneNumber}
                errorMsg="required"
              />
              <Input
                title="Email Address"
                type="email"
                errorMsg="required"
                value={name}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setName(e.currentTarget.value)
                }
              />
              <Select
                title="Region"
                state={selectRegion}
                setState={setSelectRegion}
                data={regionList}
              />
              <Input
                title="Zip Code"
                errorMsg="required"
                value={name}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setName(e.currentTarget.value)
                }
              />
            </div>
            <div className="checkbox-cont">
              <Checkbox state={checkbox} setState={setCheckbox} />
              <p>I’m interested in solar and Powerwall</p>
            </div>
            <div className="checkbox-cont">
              <Checkbox state={checkbox} setState={setCheckbox} />
              <p>Get Tesla Updates</p>
            </div>
            <p className="disclaimer-txt">
              By clicking "Submit & Continue" I agree to share the provided
              information with Tesla to be contacted with more details or offers
              about Tesla products. I understand these calls or texts may use
              computer-assisted dialing or pre-recorded messages. This consent
              is not a condition of the demo drive.
            </p>
            <Button>Submit and Continue</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DrivePage;
