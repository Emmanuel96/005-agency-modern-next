import React, { useState } from "react";
import { Box, Grid, Container } from "theme-ui";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import BlockTitle from "components/block-title";
import PriceCard from "../components/price-card";

const pricingData = [
  {
    header: "",
    name: "Standard",
    description: "For startup enterprise",
    priceWithUnit: " $49.99",
    pricePeriod: "mo",
    buttonText: "Subscribe Now",
    price_No: "price_1N8Q62ByEkz97ZD9h2IcefJG",
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Two domains",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Standard Email Support",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "30-Day Money Back Guaranteed",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Self Service Tool",
        isAvailable: true,
      },
    ],
  },
  {
    header: "Recommended",
    name: "Premium",
    description: "For startup enterprise",
    priceWithUnit: " $59.99",
    pricePeriod: "mo",
    buttonText: "Subscribe Now",
    price_No: "price_1N8Q6dByEkz97ZD9nSXX56xN",
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Unlimited domains",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Rapid Priority Support",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Personalized Exposure Risk Report ",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "30-Day Money Back Guaranteed",
        isAvailable: true,
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState(false);
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          sx={styles.pricing.blockTitle}
          tagline="Pricing Plan"
          heading="Choose your pricing policy"
        />

        <Grid sx={styles.pricing.wrapper}>
          {plan === false
            ? pricingData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  pricing: {
    margin: "auto",
    paddingBottom: 15,
    "@media(max-width:991px)": {
      paddingTop: 60,
      paddingBottom: 60,
    },
    "@keyframes fadeInUp": {
      from: {
        opacity: 0,
        transform: "translate3d(0, 100%, 0)",
      },
      to: {
        opacity: 1,
        transform: "translate3d(0, 0%, 0)",
      },
    },
    ".priceFade": {
      animationName: "fadeInUp",
      animationDuration: "1s",
    },
    blockTitle: {
      textAlign: "center",
    },
    btnWrap: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "60px",
      marginTop: "25px",
    },
    btnUl: {
      margin: 0,
      listStyle: "none",
      backgroundColor: "#F7F8FB",
      padding: "6px",
      borderRadius: "5px",
      display: "inline-block",
    },
    btn: {
      color: "black",
      padding: "10px 25px",
      fontSize: 16,
      fontWeight: 500,
      cursor: "pointer",
      backgroundColor: "transparent",
      "&:hover": {
        color: "black",
        backgroundColor: "transparent",
      },
      "&.active": {
        backgroundColor: "#fff",
        color: "black",
        boxShadow: "0px 3px 3.8px rgba(38, 78, 118, 0.1)",
      },
      "@media(max-width: 375px)": {
        padding: "10px 22px",
      },
    },
    wrapper: {
      display: "grid",
      gridGap: "30px",
      gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
      marginLeft: "auto",
      marginRight: "auto",
      width: ["100%", null, null, null, "990px"],
    },
  },
};
