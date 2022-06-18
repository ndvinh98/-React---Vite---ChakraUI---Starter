import { UI } from "lib/components";

// import CTASection from "./components/CTASection";
import SomeImage from "./components/SomeImage";
import { BiWinkSmile } from "react-icons/bi";
import FormGenerate from "lib/components/FormGenerate";
import * as yup from "yup";

const Home = () => {
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
                variant: "filled",
                _placeholder: { color: "black.2000" },
              },
            ]}
          >
            <UI.Center mt={4}>
              <UI.Button size={"md"} colorScheme="teal" type={"submit"}>
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
