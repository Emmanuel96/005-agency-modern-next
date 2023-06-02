const sgMail = require("@sendgrid/mail");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message, phone } = req.body;
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);
    const msg = {
      to: "mhaniekan@yahoo.com",
      from: "wailogamesorg@gmail.com",
      subject: "support",
      html: `Name: ${name}<br>
      Email: ${email}<br>
      Phone: ${phone}
      ${message}`,
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
