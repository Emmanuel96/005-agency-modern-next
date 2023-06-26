import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_SECRET_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const { lineItems } = req.body;

      const check = await stripe.redirectToCheckout({
        mode: "subscription",
        lineItems,
        success_url: "http://localhost:3000/",
        cancel_url: "http://localhost:3000/",
      });

      return res.status(200).json({ sessionId: check });
    } catch (error) {
      console.error("Error creating Stripe Checkout session:", error);
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
};
