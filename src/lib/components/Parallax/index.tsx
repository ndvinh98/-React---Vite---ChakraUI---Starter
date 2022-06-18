import { useEffect } from "react";
import Styled from "styled-components";
import Parallax from "parallax-js";
import bgDark from "/assets/dark.jpg";
import bgLight from "/assets/dark.jpg";
import { Box, Center, Image } from "@chakra-ui/react";

interface ILayout {
  colorMode: string;
  children: React.ReactNode;
}

function ParallaxImagesContainer(props: ILayout) {
  const { colorMode, children } = props;

  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });

  return (
    <Box
      overflow={"hidden"}
      id="scene"
      width={"full"}
      minHeight={"100vh"}
      boxSizing={"border-box"}
      transition="white 1s linear"
    >
      <Image
        position={"absolute"}
        height={"100%"}
        width={"100%"}
        zIndex={-1}
        data-depth={0.2}
        src={colorMode === "dark" ? bgDark : bgLight}
        alt={"background"}
      />
      <Center>{children}</Center>
    </Box>
  );
}
export default ParallaxImagesContainer;
