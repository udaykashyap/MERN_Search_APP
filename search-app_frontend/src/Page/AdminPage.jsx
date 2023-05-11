import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

const AdminPage = () => {
  //State which manage the all input field data
  const [img, setImg] = useState("");
  const [companies, setComp] = useState("");
  const [headline, setHead] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDesc] = useState("");
  const [primaryText, setPtext] = useState("");
  const toast = useToast();

  //After clicking on add gigs this funcion is run in which we post the all input data as payload to the server.
  const handleClick = async () => {
    let payload = { img, companies, headline, url, description, primaryText };

    try {
      if (
        payload.img !== "" &&
        payload.companies !== "" &&
        payload.headline !== ""
      ) {
        let res = await fetch(
          `https://sleepy-yak-spacesuit.cyclic.app/admin/addgigs`,
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        console.log(res);
        //This is toast which show success of adding gigs.
        toast({
          title: "Gig Added.",
          description: "We've added your gig for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Incomplete Data.",
          description: "We are unable to add your gig for you.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }

      //After submiting payload here we clear the all input field.
      setImg("");
      setComp("");
      setHead("");
      setUrl("");
      setDesc("");
      setPtext("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"100vw"}
      h="100vh"
      background={"linear-gradient(45deg, #000033, #000000)"}
    >
      <Text color={"white"} fontSize={"34px"} textAlign="center">
        Add Gigs
      </Text>
      <Box
        width={{ base: "90%", md: "70%", xl: "50%" }}
        margin={"auto"}
        padding={"3%"}
        boxSizing
        color={"white"}
        lineHeight={"60px"}
      >
        <Input
          type="url"
          placeholder="Image"
          id="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Companies Name"
          id="comp"
          value={companies}
          onChange={(e) => setComp(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Headline"
          id="head"
          value={headline}
          onChange={(e) => setHead(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Description"
          id="desc"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Input
          type="url"
          placeholder="Website Url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Input
          type="url"
          placeholder="PrimaryText"
          id="ptext"
          value={primaryText}
          onChange={(e) => setPtext(e.target.value)}
        />
        <Button
          backgroundColor={"transparent"}
          _hover={{ color: "red", border: "1px solid gray" }}
          onClick={handleClick}
        >
          Add Gigs
        </Button>
      </Box>
    </Box>
  );
};

export default AdminPage;
