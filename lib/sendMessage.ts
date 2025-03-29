export const sendMessage = () => {
	const accountSid = process.env.TWILIO_ACCOUNT_SID as string
	const authToken = process.env.TWILIO_AUTH_TOKEN as string
	const client = require("twilio")(accountSid, authToken)

	client.messages
		.create({
			body: "You have an appointment with Owl, Inc. on Friday, November 3 at 4:00 PM. Reply C to confirm.",
			messagingServiceSid: "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
			to: "+15558675310",
		})
		.then(message => console.log(message.sid))
}
