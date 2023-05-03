import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import Accordion from "components/accordion/accordion";

const accordionData = [
  {
    isExpanded: false,
    title: "What is GhostModeCyber?",
    contents: (
      <div>
        GhostModeCyber is a subscription-based service that automatically scans
        and removes users’ data from thousands of data brokers’ and employee
        monitoring tools databases. GhostModeCyber conducts regular monitoring
        to ensure brokers don’t add the information again
      </div>
    ),
  },
  {
    isExpanded: true,
    title: "Is GhostModeCyber legit?",
    contents: (
      <div>
        Yes, GhostModeCyber is a legal entity that follows the guidelines of
        data privacy laws such as the California Consumer Privacy Act(CCPA), the
        General Data Protection Regulation(GDPR), and the UK GDPR.
        GhostModeCyber also works with consumer protection agencies to protect
        the rights of its customers.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "How does GhostModeCyber work?",
    contents: (
      <div>
        GhostModeCyber continuously scans the web to poll data brokers and
        employee monitoring tools in search of your employee information and
        automatically remediates incidents by masking your info and/or sending
        removal requests on your behalf.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What is the GhostModeCyber refund policy?",
    contents: (
      <div>
        You will get refunded automatically if you cancel before the first 30
        days. Just send us a mail at info@ghostmodecyber.com
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Can I cancel my subscription?",
    contents: (
      <div>
        Of course! Monthly subscribers can cancel their subscription at any time
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "What payment methods do you accept?",
    contents: (
      <div>
        A valid credit card or bank account is required for paying accounts. All
        major credit and debit cards are accepted.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section">
      <Container>
        <BlockTitle
          title="Frequently Ask Question"
          text="Ask your question and meet"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <Link sx={styles.askButton} path="#">
              Ask your Question
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["70px", null, null, null, "90px", null, "130px"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 33.333%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    mt: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "black",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 66.666%"],
  },
};
