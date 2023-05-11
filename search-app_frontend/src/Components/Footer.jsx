import { Box, Text } from "@chakra-ui/react";
import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box bgColor={"#16181e"}>
      <Text
        color={"gray"}
        cursor={"pointer"}
        fontWeight={"500"}
        fontSize={"xl"}
      >
        <Link to={"/admin"}>Add Gigs</Link>
      </Text>
      <Text
        fontSize={{ base: "22px", md: "24px", xl: "32px" }}
        background={"linear-gradient(90deg, #02c8ff, #ff00ee)"}
        backgroundClip="text"
        textFillColor=" transparent"
      >
        Thanks for visiting Search Space!
      </Text>
    </Box>
  );
};

export default Footer;
