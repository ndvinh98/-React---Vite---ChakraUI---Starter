import { useRouter } from "lib/hooks/useRouter";
import { UI } from "lib/components";
import { BsSearch } from "react-icons/bs";
import { useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import Pagination from "lib/components/Pagination";

// import CTASection from "./components/CTASection";
// import { BiWinkSmile } from "react-icons/bi";
// import FormGenerate from "lib/components/FormGenerate";
// import * as yup from "yup";

const SAMPLE_DATA = {
  time_processing: 10,
  query: "Who is the most handsome ?",
  results: [
    {
      id: 1,
      overlap_key_words: 6,
      ir_score: 1,
      bert_score: 1,
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      overlap_key_words: 6,
      ir_score: 1,
      bert_score: 1,
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      overlap_key_words: 6,
      ir_score: 1,
      bert_score: 1,
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      overlap_key_words: 6,
      ir_score: 1,
      bert_score: 1,
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 5,
      overlap_key_words: 6,
      ir_score: 1,
      bert_score: 1,
      title: "Lorem Ipsum is simply dummy text of the printing",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ],
};

const SearchPage = () => {
  const { query } = useRouter();
  const inputGroupBgColor = useColorModeValue("gray.50", "black");
  const [question, setQuestion] = useState<string>();

  return (
    <>
      <UI.Box width={"100%"} height={"100%"} p={4}>
        <UI.Box width={"100%"} height={"100%"}>
          <UI.Flex
            alignItems={"center"}
            width={"100%"}
            height={"100%"}
            flexDirection={"column"}
          >
            <UI.InputGroup
              maxWidth={"50vw"}
              border={"1px solid teal"}
              bgColor={inputGroupBgColor}
              borderRadius={"5px"}
            >
              <UI.InputRightElement>
                <BsSearch cursor={"pointer"} type={"submit"} />
              </UI.InputRightElement>
              <UI.Input
                type="tel"
                placeholder="Question ?"
                onChange={(event) => {
                  setQuestion(event.target.value);
                }}
              />
            </UI.InputGroup>
            <UI.VStack
              width={"100%"}
              height={"100%"}
              mt={20}
              gap={4}
              maxWidth={"70vw"}
              overflow={"auto"}
              zIndex={99999}
            >
              {SAMPLE_DATA?.results?.map((item) => {
                return (
                  <UI.VStack
                    key={item.id}
                    bgColor={"gray.500"}
                    p={4}
                    border={"1px solid gray.500"}
                    borderRadius={"20px"}
                    gap={2}
                    alignItems={"start"}
                    cursor={"pointer"}
                  >
                    <UI.Heading fontSize={"30px"}>{item?.title}</UI.Heading>
                    <UI.Text textAlign={"justify"} fontSize={"18px"}>
                      {item?.content}...
                    </UI.Text>
                  </UI.VStack>
                );
              })}
              <UI.Center mt={4}>
                <Pagination
                  size="sm"
                  currentPage={1}
                  totalCount={20}
                  pageSize={5}
                  //onChangePage={console.log("hihi")}
                />
              </UI.Center>
            </UI.VStack>
          </UI.Flex>
        </UI.Box>
      </UI.Box>
    </>
  );
};

export default SearchPage;
