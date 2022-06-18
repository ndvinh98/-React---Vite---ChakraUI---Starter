import { Box, Image, Flex, Center } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Particles from "react-tsparticles";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";
import educationParticles from "lib/configs/tsParticles";
import { useColorMode } from "@chakra-ui/react";
import bgDark from "/assets/dark.jpg";
import bgLight from "/assets/light.jpg";
import Parallax from "parallax-js";
import { useEffect } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { colorMode } = useColorMode();
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });
  return (
    <Box width={"full"} boxSizing={"border-box"} transition="white 1s linear">
      <Center overflow={"hidden"} id={"scene"} position={"relative"}>
        <Image
          position={"absolute"}
          width={"full"}
          height={"100vh"}
          objectFit={"cover"}
          zIndex={-1}
          data-depth={0.1}
          src={colorMode === "dark" ? bgDark : bgLight}
          alt={"background"}
        />
        <Image
          top={"50% !important"}
          left={"50% !important"}
          width={250}
          data-depth={2}
          src="/assets/astronault.png"
          position={"absolute"}
        />
      </Center>
      <Box position={"absolute"} top={0} width={"full"}>
        <Meta />
        <Flex wrap="wrap" p={8} minHeight={"90vh"}>
          <Particles
            //@ts-ignore
            options={
              colorMode === "light"
                ? educationParticles[0]
                : educationParticles[1]
            }
            id="tsparticles"
          />
          <Header />
          <Box height={"100%"} width={"100%"} as="main">
            {children}
          </Box>
          <Footer />
        </Flex>
      </Box>
    </Box>
  );
};

export default Layout;
