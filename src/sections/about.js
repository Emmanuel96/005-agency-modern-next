/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import Image from "components/image";
import { IoIosCheckmarkCircle } from "react-icons/io";

import ProfitThumb from "assets/images/business-profit.png";
import DrawingArrow from "assets/drawing-arrow.svg";

const data = {
  title: "About",
  description:
    "GhostModeCyber is the only solution custom-built to specialize in protecting remote workers anonymity, with an advanced AI powered detection and correlation engine for efficient scanning, monitoring and protection from employee monitoring solutions utilized by employers.\n Our platform ensures you get guaranteed online anonymity and privacy for your multiple jobs effectively reducing your risk and protecting your double income.\n Our team consists of senior security engineers with solid experience protecting the biggest financial services companies, energy companies and healthcare companies. We decided to band together, utilizing skills learnt protecting big enterprise companies to build best-in-class monitoring and privacy protection systems for remote workers.",
  btnName: "Explore Details",
  btnURL: "#",
  points: [
    {
      icon: <IoIosCheckmarkCircle />,
      text: "Unlimited design possibility",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: "Completely responsive features",
    },
  ],
};

export default function Banner2() {
  return (
    <section id="about" sx={{ variant: "section.profit" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
          />
        </Box>
      </Container>
      <Box sx={styles.bottomArrow}>
        <Image src={DrawingArrow} alt="Arrow" />
      </Box>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["flex-Start", null, null, "space-between"],
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, null, null, null, null, null, null, 8],
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: "flex",
    order: [2, null, null, 0],
    mx: ["auto", 0],
    img: {
      ml: [0, null, null, -3],
      height: [265, "auto"],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ["center", null, null, "center"],
    width: ["100%", null, null, 350, 400, "100%"],
    pb: [7, null, null, 0],
    ".btn__link": {
      mt: [4, null, 5],
    },
  },
  bottomArrow: {
    position: "absolute",
    bottom: -185,
    left: "33%",
    display: ["none", null, null, null, null, null, null, "block"],
  },
};
