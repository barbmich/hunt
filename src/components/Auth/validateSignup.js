export default function validateSignup(values) {
  let errors = {};

  // Name Errors
  if (!values.name) {
    errors.name = "A username is required.";
  }
  // Email Errors
  if (!values.email) {
    errors.email = "An e-mail is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "The e-email provided is invalid.";
  }
  // Password Errors
  if (!values.password) {
    errors.password = "A password is required.";
  } else if (values.password.length < 6) {
    errors.password = "The password requires a minimum of 6 characters.";
  }

  return errors;
}
