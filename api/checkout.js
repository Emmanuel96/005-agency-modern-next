import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

export async function checkout(lineItems) {
  let stripePromise = null;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_Publishable_KEY);
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
