const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.PHONE_NUMBER;

const client = require("twilio")(accountSid, authToken);

console.log("accountSid", accountSid);
console.log("authToken", authToken);
console.log("phoneNumber", phoneNumber);

client.messages
  .create({
    body: "Testing Twilio credentials",
    from: "+19495419307",
    to: "+19496833881",
  })
  .then((message) => console.log(`Message sent: ${message.sid}`))
  .catch((err) => console.error("Error:", err));
