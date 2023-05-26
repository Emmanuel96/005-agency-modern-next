import Stripe from "stripe";
const sgMail = require("@sendgrid/mail");

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API);

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { session_id } = req.query;

      // Retrieve the session_id from the query parameters
      if (!session_id) {
        res.status(400).json({ error: "Missing session_id" });
        return;
      }

      // Retrieve payment details from the Stripe API
      const session = await stripe.checkout.sessions.retrieve(session_id);
      // const invoiceId = session.invoice;
      // const invoice = (await stripe.invoices.retrieve(invoiceId))
      //   .payment_intent;
      // const paymentIntent = await stripe.paymentIntents.retrieve(invoice);
      // const paymentInfo = session.payment_intent;
      // const customer = session.customer_details;
      // console.log(customer.email);

      // const msg = {
      //   to: customer.email,
      //   from: "emmanuel@csr-accreditation.co.uk",
      //   subject: "Payment Confirmation",
      //   html: "sdhjdshdsjgvdsh",
      // };

      // await sgMail.send(msg);

      // Return the payment details
      res.status(200).json(session).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
