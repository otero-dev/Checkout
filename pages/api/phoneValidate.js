export default (req, res) => {
    const {number, code} = req.body;
    const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

        client.lookups.phoneNumbers(`+${number}`)
        .fetch({countryCode: code})
        .then(phone_number => res.status(200).json({valid: true, phone_number: phone_number}))
        .catch(error => res.status(200).json({valid: false}));
}
