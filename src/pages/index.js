import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import KeyFeature from "../sections/key-feature";
import ServiceSection from "../sections/service-section";
import Service from "../sections/service";
import Faq from "../sections/faq";
import About from "../sections/about";
import TestimonialCard from "../sections/testimonial";
import KeyBanner from "sections/key-banner";
import ContactForm from "components/form";
import Banner2 from "sections/banner2";
import Banner3 from "sections/banner3";
import Banner4 from "sections/banner4";
import Pricing from "sections/pricing";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Ghost" />
          <Banner2 />
          <Banner />
          <Banner3 />
          <Banner4 />
          <KeyBanner />
          <Service />
          <Pricing />
          <ContactForm />
          <About />
          <Faq />
          <TestimonialCard />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
