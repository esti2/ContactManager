export const validateContact = (name, email, phone) => {
  if (!name || !email || !phone) {
    throw new Error(
      'Missing arguments for add command\nUsage: node app.js add "name" "email" "phone"',
    );
  }
  if (!email.includes("@")) {
    throw new Error("Email must contain @ symbol");
  }
  return true;
};
