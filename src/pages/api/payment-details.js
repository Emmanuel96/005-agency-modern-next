import Stripe from "stripe";
import { buffer } from "micro";
const sgMail = require("@sendgrid/mail");

const stripe = new Stripe(process.env.NEXT_SECRET_KEY);
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { session_id } = req.body;
    const data = localStorage.getItem("workEmails");
    if (!data) {
      res.send("No workEmails provided");
    }
    const session = await stripe.checkout.sessions.retrieve(session_id);
    console.log(session);
    const customer = await stripe.customers.retrieve(session.customer);

    const msg = {
      to: `oluwateezzy03@gmail.com`,
      from: "wailogamesorg@gmail.com",
      subject: "Work Emails",
      html: `Work Emails: ${JSON.parse(data)} for ${customer.email}`,
    };
    await sgMail.send(msg);
    res.status(200).send("Email sent successfully");
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
