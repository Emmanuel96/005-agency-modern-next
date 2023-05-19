const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const SENDGRID_API =
      "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";
    sgMail.setApiKey(SENDGRID_API);
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
