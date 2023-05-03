/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Fast Performance",
    title: "Advanced Monitoring Engine:",
    text: "Using Machine Learning, AI, & Natural Language Processing, we measure thousands of daily activity points for your employer domain address across the internet to generate active intelligence on rogue tools scraping data that might identify your multiple jobs. \n Our proprietary bot blocking system produces real-time masking data to obfuscate your PII that might be key indicators used in generating reports for adversarial employee monitoring software.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Pro Subscription",
    title: "24/7 Support Availability",
    text: "Our team of security engineers will provide round the clock assistance in responding to any inquiries or incidents in order to ensure fast resolution of issues.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Partnership deal",
    title: "Easy Onboarding",
    text: "Only requirement for onboarding is for you to provide the domains for your multi jobs and the engine immediately starts scanning and continuously keeping your identity anonymous.",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "Customer Support",
    title: "Easy Cancellation Anytime",
    text: "No hassle with cancellations. No draconian contracts. We automatically delete your information when you cance.",
  },
];

export default function Service() {
  return (
    <section id="service" sx={{ variant: "section.service" }}>
      <Container>
        <SectionHeader title="Services" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
