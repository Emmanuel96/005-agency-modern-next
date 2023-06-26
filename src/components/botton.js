import { useState, useEffect } from "react";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Set up Stripe
const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

// Function to save emails to localStorage
const saveEmailsToLocalStorage = (emails) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("workEmails", JSON.stringify(emails));
  }
};

// Component for modal form
const ModalForm = ({ closeModal }) => {
  const [emails, setEmails] = useState("");

  const handleInputChange = (e) => {
    setEmails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEmailsToLocalStorage(emails.split(",").map((email) => email.trim()));
    closeModal();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter work emails separated by commas"
          value={emails}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Component for Stripe payment
const StripePayment = ({ emails }) => {
  // const stripe = useStripe();
  // const elements = useElements();
  // const [paymentError, setPaymentError] = useState(null);

  const handlePaymentSuccess = async () => {
    //   // Process successful payment
    //   try {
    //     const { error, paymentIntent } = await fetch("/your-payment-endpoint", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ emails }),
    //     }).then((res) => res.json());
    //   } catch (error) {
    //     setPaymentError(error.message);
    //     console.log(error);
    //     return;
    //   }
    //   console.log("Payment successful!");
    //   console.log("Work emails:", emails);

    // Send emails to the user
    console.log("Payment successful!");
    console.log("Work emails:", emails);
  }

  return (
    <Elements stripe={stripePromise}>
      {/* Stripe payment components go here */}
      <button onClick={handlePaymentSuccess}>Complete Payment</button>
    </Elements>
  );
};

// Reusable App component
const ReusableApp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [storedEmails, setStoredEmails] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmails = JSON.parse(localStorage.getItem("workEmails"));
      if (storedEmails) {
        setStoredEmails(storedEmails);
      }
    }
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Your Next.js App</h1>
      <button onClick={openModal}>Open Modal</button>

      {modalOpen && <ModalForm closeModal={closeModal} />}

      {/* Render Stripe payment component when ready */}
      {storedEmails.length > 0 && <StripePayment emails={storedEmails} />}
    </div>
  );
};

export default ReusableApp;
