import React, { useState } from "react";
import { Box, Grid, Container } from "theme-ui";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import BlockTitle from "components/block-title";
import PriceCard from "../components/price-card";

const pricingMonthlyData = [
  {
    header: "Recommended",
    name: "Premium",
    description: "For startup enterprise",
    priceWithUnit: " $89.99/",
    pricePeriod: "mo",
    buttonText: "Subscribe Now",
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Unlimited domains",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Cancel anytime.",
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: "Rapid Response Support.",
        isAvailable: true,
      },
    ],
  }
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
          {plan === true
            ? pricingYearlyData.map((price, index) => (
                <PriceCard key={index} data={price} />
              ))
            : null}
          {plan === false
            ? pricingMonthlyData.map((price, index) => (
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
