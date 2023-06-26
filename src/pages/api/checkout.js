import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51N6aFKByEkz97ZD9pXn4FwfJdb5ZFSnbFRy3nRFEPPi4Ch5QRRYXlxJ4X637UcWPdSiIeA134eZ1B2xf1qqtlU1X00eiv2NBZJ"
);

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
