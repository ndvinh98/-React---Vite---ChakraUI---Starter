import { Box, Flex, Image, Link } from "@chakra-ui/react";

const SomeImage = () => {
  return (
    <>
      {/* <Box id="scene" textAlign="center" marginX="auto" maxWidth={[140, 280]}>
        <Image width={200} data-depth={2} src="/assets/astronault.png" />
      </Box> */}

      <Flex marginY={4} justifyContent="center" alignItems="center" gridGap={2}>
        <Image
          src="/assets/vite-logo.svg"
          title="vite"
          height={33}
          width={33}
        />
        <Image
          src="/assets/react-icon.svg"
          title="react"
          height={33}
          width={33}
        />
        <Image
          src="/assets/chakra-ui-logomark-colored.svg"
          title="Chakra UI"
          height={33}
          width={33}
        />
        <Image
          src="/assets/ts-logo-512.svg"
          title="TypeScript"
          height={33}
          width={33}
        />
      </Flex>
    </>
  );
};

export default SomeImage;
