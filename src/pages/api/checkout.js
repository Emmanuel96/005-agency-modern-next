import Stripe from "stripe";

const stripe = new Stripe(process.env.Stripe_Secret, {
  apiVersion: "2020-08-27",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { amount, token } = req.body;

    try {
      const charge = await stripe.charges.create({
        amount,
        currency: "usd",
        source: token.id,
        description: "payment",
      });

      res.status(200).json({
        success: true,
        message: "Payment Successful",
        charge: charge.id,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Payment Failed",
        error: error.message,
      });
    }
  }
  else {
    res.status(404).json({
      success: false,
      message: "Invalid request",
    });
  }
}
