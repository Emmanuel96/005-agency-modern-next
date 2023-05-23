import { loadStripe } from "@stripe/stripe-js";

export async function checkout(lineItems) {
  let stripePromise = null;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        "pk_test_51N6aFKByEkz97ZD9ep5zG6odMaKg3SRChOSoZUhDZ12Q1j9CNC2hsdHsi8HPjryWg41AhZY1Fi2xWZ3ajW70Rp0f00gCVH3bCF"
      );
    }
    return stripePromise;
  };

  const stripe = await getStripe();
  const check = await stripe.redirectToCheckout({
    mode: "subscription",
    lineItems,
    successUrl: `${window.location.origin}/api/payment-details?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });

  console.log(check);
}
