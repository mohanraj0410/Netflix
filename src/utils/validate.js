export let validateSignInValues = (email, password) => {
  const x = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const y = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  if (!x) {
    return "Email is invalid!";
  }
  if (!y) {
    return "Password is invalid!";
  }
  return null;
};
export let validateSignUpValues = (name, email, password) => {
  const x = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
  const y = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const z = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  if (!x) {
    return "Enter your Name correctly!";
  }
  if (!y) {
    return "Email is invalid!";
  }
  if (!z) {
    return "Password is invalid!";
  }
  return null;
};
