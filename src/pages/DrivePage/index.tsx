import "./style.scss";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Input from "../../components/Input";

const tesla = [
  { img: "../../assets/Model3/model-3-demo.jpg" },
  { img: "../../assets/ModelY/model-Y-demo.jpg" },
  { img: "../../assets/ModelS/model-S-demo.jpg" },
  { img: "../../assets/ModelX/model-X-demo.jpg" },
];

function DrivePage() {
  const { carId } = useParams<string>();
  const [selectedCarIdx, setSelectedCarIdx] = useState<number>(0);
  const [name, setName] = useState<string>("");

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
          <Fade>
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
            <Input
              title="First Name"
              errorMsg="required"
              value={name}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setName(e.currentTarget.value)
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DrivePage;
