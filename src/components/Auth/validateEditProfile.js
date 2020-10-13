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

  // Current Password Errors
  if (!values.currentPassword) {
    errors.currentPassword = "A current password is required.";
  } else if (values.currentPassword.length < 6) {
    errors.currentPassword =
      "The current password has a minimum of 6 characters by default.";
  }

  // New Password Errors
  if (values.newPassword.length < 6) {
    errors.newPassword = "The new password requires a minimum of 6 characters.";
  }

  return errors;
}
