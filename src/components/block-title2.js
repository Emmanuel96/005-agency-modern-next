import { jsx, Heading, Box, Text } from "theme-ui";

const BlockTitle2 = (props) => {
  return (
    <Box variant="blockTitle" sx={props.sx}>
      <Text as="h2">{props.tagline}</Text>
      <Heading as="h1">{props.heading}</Heading>
    </Box>
  );
};

export default BlockTitle2;
