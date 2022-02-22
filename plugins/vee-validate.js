import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required."
});

extend("email", {
  ...email,
  message: "Please enter a valid email address"
});