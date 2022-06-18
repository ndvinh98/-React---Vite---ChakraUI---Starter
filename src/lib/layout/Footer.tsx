import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
    >
      <Text fontSize="xs">
        {new Date().getFullYear()} -{" "}
        <Link
          href="https://github.com/ndvinh98/UITQA-UIT-Question-Answering"
          isExternal
        >
          @koyomin
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
