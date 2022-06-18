import { Box, Heading, Icon } from "@chakra-ui/react";
import { BiWinkSmile } from "react-icons/bi";

const SomeText = () => {
  return (
    <Box textAlign="center">
      <Heading>
        UIT Question Answering System
        <Icon as={BiWinkSmile} />
      </Heading>
    </Box>
  );
};

export default SomeText;
