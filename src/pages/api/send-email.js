const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    sgMail.setApiKey(process.env.SENDGRID_API);
    const msg = {
      to: email,
      from: "emmanuel@csr-accreditation.co.uk",
      subject: "support",
      html: message,
    };

    try {
      await sgMail.send(msg);
      res.status(200).end();
    } catch (error) {
      res.status(500).end();
    }
  } else {
    res.status(404).end();
  }
}
