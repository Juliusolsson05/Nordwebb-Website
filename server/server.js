const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const app = express();
const cors = require('cors');
const rateLimit = require("express-rate-limit");


app.use(cors({
  origin: 'http://localhost:4200'
}))

app.use(bodyParser.json());

// Limits the user to only two messages each 24 hours
const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 1 hour window
  max: 2, // start blocking after 2 requests
  message: "Too many messages sent, please try again the next day"
});

// Creates the actual request handler, it stores the authentication information for TWILLO and -
// Handles the actual request
app.post('/send-sms', limiter, (req, res) => {
    console.log("test")

    const accountSid = 'hidden';
    const authToken = 'hidden';
    const client = new twilio(accountSid, authToken);

    client.messages.create({
        body: `En användare vill ringa oss med denna info: Plan: ${req.body.userTier}, Nummer: ${req.body.userNumber}`,
        to: '+hidden',  // Your phone number
        from: '+hidden' // Your Twilio number
    })
    .then((message) => console.log(message.sid));
});

app.listen(3000, () => console.log('Node server running on port 3000'));
