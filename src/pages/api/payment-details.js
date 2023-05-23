import Stripe from "stripe";
const sgMail = require("@sendgrid/mail");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      sgMail.setApiKey(process.env.SENDGRID_API);
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
      const customer = session.customer_details;

      const msg = {
        to: customer.email,
        from: "emmanuel@csr-accreditation.co.uk",
        subject: "Payment Confirmation",
        html: `
        Name: ${customer.name}
        Invoice_id: ${session.invoice}
        `,
      };

      await sgMail.send(msg);

      // Return the payment details
      res.status(200).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
