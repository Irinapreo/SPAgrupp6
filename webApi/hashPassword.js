const argon2 = require("argon2");

// Example values (replace these with your actual values)
const hashedPassword =
  "$argon2id$v=19$m=65536,t=3,p=4$qB0Cz0WPjB2ZThpZxjBlOA$tsdUojVzCMPA9383dbuw/PnTSaCdP4ru/Oh/NPbV+j0";
const password = "menaid1";

// Verify the password
argon2
  .verify(hashedPassword, password)
  .then((isValid) => {
    console.log("Password verification result:", isValid);
  })
  .catch((err) => {
    console.error("Error during password verification:", err);
  });
