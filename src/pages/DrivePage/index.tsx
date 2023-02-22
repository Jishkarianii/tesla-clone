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
import { regionList } from "../../data/allCountryRegion";
import { useFormik } from "formik";
import { contactSchema } from "../../schemas";

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

  const { values, errors, touched, handleChange, setFieldValue, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        contactPreference: contactPreference[0].name,
        phoneNumber: "",
        emailAddress: "",
        region: regionList[229].name,
        zipCode: "",
        interested: false,
        getUpdates: true,
      },
      validationSchema: contactSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

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
          <form onSubmit={handleSubmit}>
            <div className="form-cont">
              <Input
                id="firstName"
                name="firstName"
                title="First Name"
                errorMsg={
                  errors.firstName && touched.firstName ? errors.firstName : ""
                }
                value={values.firstName}
                onChange={handleChange}
              />
              <Input
                id="lastName"
                name="lastName"
                title="Last Name"
                errorMsg={
                  errors.lastName && touched.lastName ? errors.lastName : ""
                }
                value={values.lastName}
                onChange={handleChange}
              />
              <Select
                id="contactPreference"
                title="Contact Preference"
                value={values.contactPreference}
                setValue={setFieldValue}
                data={contactPreference}
              />
              <PhoneNumberInput
                id="phoneNumber"
                title="Phone Number"
                setValue={setFieldValue}
                errorMsg={
                  errors.phoneNumber && touched.phoneNumber
                    ? errors.phoneNumber
                    : ""
                }
              />
              <Input
                id="emailAddress"
                name="emailAddress"
                title="Email Address"
                type="email"
                errorMsg={
                  errors.emailAddress && touched.emailAddress
                    ? errors.emailAddress
                    : ""
                }
                value={values.emailAddress}
                onChange={handleChange}
              />
              <Select
                id="region"
                title="Region"
                value={values.region}
                setValue={setFieldValue}
                data={regionList}
              />
              <Input
                id="zipCode"
                name="zipCode"
                title="Zip Code"
                errorMsg={
                  errors.zipCode && touched.zipCode ? errors.zipCode : ""
                }
                value={values.zipCode}
                onChange={handleChange}
              />
            </div>
            <div className="checkbox-cont">
              <Checkbox
                id="interested"
                value={values.interested}
                setValue={setFieldValue}
              />
              <p>I’m interested in solar and Powerwall</p>
            </div>
            <div className="checkbox-cont">
              <Checkbox
                id="getUpdates"
                value={values.getUpdates}
                setValue={setFieldValue}
              />
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
