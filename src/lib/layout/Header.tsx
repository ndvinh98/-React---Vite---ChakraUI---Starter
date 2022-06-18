import { Box, Flex, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Link to="/">
        <IconButton aria-label="Home" icon={<FcHome />} />
      </Link>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
