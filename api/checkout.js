import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

export async function checkout(lineItems) {
  let stripePromise = null;
  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
    }
    return stripePromise;
  };

  const stripe = await getStripe();
  const check = await stripe.redirectToCheckout({
    mode: "subscription",
    lineItems,
    successUrl: `${window.location.origin}`,
    cancelUrl: window.location.origin,
  });

  return check;
}