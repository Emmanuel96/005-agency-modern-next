import { loadStripe } from "@stripe/stripe-js";

export async function checkout(lineItems) {
  let stripePromise = null;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        "pk_test_51LIAmLFozueojb1JUE6c6euwjP2ClmWm1g1dxyD9cOOpvBCgMkLgClLfXH8xvEeplqPFcYh6granpyBVYD0puaCc00HeNEtsOh"
      );
    }
    return stripePromise;
  };

  const stripe = await getStripe();
  await stripe.redirectToCheckout({
    mode: "subscription",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin
  })
}
