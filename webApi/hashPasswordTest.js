const argon2 = require("argon2");

const password = "menaid1";
const hashedPassword =
  "$argon2id$v=19$m=65536,t=3,p=4$Uvokq0p70GcGcsOywJI4ZA$cHWDdURtv5ZMSD2WUtzw0Ti8lTseiz0irS7ff9ThA64";

argon2
  .hash(password, {
    type: argon2.argon2id,
    memoryCost: 65536,
    timeCost: 3,
    parallelism: 4,
  })
  .then((hashedPassword) => {
    console.log("Hashed Password:", hashedPassword);
  })
  .catch((err) => {
    console.error("Error during hashing:", err);
  });

argon2
  .verify(hashedPassword, password)
  .then((isValid) => {
    console.log("Password verification result:", isValid);
  })
  .catch((err) => {
    console.error("Error during verification:", err);
  });
