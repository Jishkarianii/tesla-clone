import * as yup from "yup";

const phoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/
const emailAddressRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const zipCodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/

export const contactSchema = yup.object().shape({
  firstName: yup.string().min(1).required("required"),
  lastName: yup.string().min(1).required("required"),
  phoneNumber: yup.string().matches(phoneNumberRegex, { message: "The phone number appears to be invalid" }).required("required"),
  emailAddress: yup.string().matches(emailAddressRegex, { message: "not a valid email" }).required("required"),
  zipCode: yup.string().matches(zipCodeRegex, { message: "zip code format: 78585" }).required("required"),
});
