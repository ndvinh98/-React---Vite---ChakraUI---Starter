import { UI } from "lib/components";
import { useColorModeValue } from "@chakra-ui/react";
// import CTASection from "./components/CTASection";
import { BiWinkSmile } from "react-icons/bi";
import * as yup from "yup";
import { useRouter } from "lib/hooks";
import FormGenerate from "lib/components/FormGenerate";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const inputBgColor = useColorModeValue("gray.50", "black");
  const btnColor = useColorModeValue("teal", "blue");
  const navigate = useNavigate();

  return (
    <UI.Flex
      justifyContent={"start"}
      height={"100%"}
      flexDirection={"column"}
      gap={4}
    >
      <UI.Box textAlign="center" width={"full"}>
        <UI.Heading fontSize={"50px"}>
          UIT Question Answering System
          <UI.Icon as={BiWinkSmile} />
        </UI.Heading>
      </UI.Box>

      <UI.Center mt={10} mb={10} width={"full"}>
        <UI.Box w={"full"} maxWidth={"700px"}>
          <FormGenerate
            onSubmit={(value) => {
              navigate(`/search?question=${value?.question}`);
              console.log(value);
            }}
            w={"full"}
            spacing={6}
            schema={{
              question: yup.string().required("Please enter question"),
            }}
            fields={[
              {
                name: "question",
                type: "input",
                size: "lg",
                placeholder: "Question ?",
                borderColor: "900",
                //variant: "filled",
                //_placeholder: { color: "black.50" },
                bg: inputBgColor,
              },
            ]}
          >
            <UI.Center mt={4}>
              <UI.Button size={"md"} colorScheme={btnColor} type={"submit"}>
                Search
              </UI.Button>
            </UI.Center>
          </FormGenerate>
        </UI.Box>
      </UI.Center>
    </UI.Flex>
  );
};

export default Home;
