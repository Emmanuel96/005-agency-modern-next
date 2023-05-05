import React, { useState } from "react";
import {
  Box,
  Label,
  Input,
  Textarea,
  Button,
  Container,
  Heading,
  Text,
} from "theme-ui";
import BannerImg from "assets/banner-thumb.png";
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";
import {
  CardElement,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(PaymentElement),
      billing_details: {
        name,
        email,
        address: {
          line1: address,
        },
      },
    });

    if (!error) {
      // Send paymentMethod.id to your server to complete the payment
      console.log(paymentMethod);
    }
  };

  return (
    <section id="support" sx={{ variant: "section.profit" }}>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox} as="form">
          <form onSubmit={handleSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              mb={3}
              required
            />
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb={3}
              required
            />
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              mb={3}
              required
            />

            <Label htmlFor="card">Card details</Label>
            <CardElement />
            <Button type="submit" disabled={!stripe}>
              Pay now
            </Button>
          </form>
        </Box>
      </Container>
    </section>
  );
};

export default PaymentForm;

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      width: "70%",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
