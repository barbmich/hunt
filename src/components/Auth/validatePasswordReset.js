export default function validateSignup(values) {
  let errors = {};

  // Email Errors
  if (!values.email) {
    errors.email = "An e-mail is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "The e-email provided is invalid.";
  }

  return errors;
}
