import Stripe from "stripe";
const sgMail = require("@sendgrid/mail");

const stripe = new Stripe(process.env.NEXT_SECRET_KEY);
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const buf = await Buffer(req);
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buf.toString(),
        sig,
        process.env.NEXT_WEBHOOK_KEY
      );
    } catch (err) {
      console.log(err.message);
      return res.status(400).send(`${err.message}`);
    }
    if (event.type === "payment_intent.succeeded") {
      const payment_intent = event.data.object;
      console.log(payment_intent)
    }
  }
}
