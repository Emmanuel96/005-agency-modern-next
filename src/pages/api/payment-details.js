import Stripe from "stripe";
import { buffer } from "micro";
const sgMail = require("@sendgrid/mail");

const stripe = new Stripe(process.env.NEXT_SECRET_KEY);
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const buf = await buffer(req);
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
      const payment_intent = event.data.id;
      const msg = {
        to: "oluwateezzy03@gmail.com",
        from: "wailogamesorg@gmail.com",
        subject: "support",
        html: `${payment_intent}`,
      };
      sgMail.send(msg);
    }
  }
}
