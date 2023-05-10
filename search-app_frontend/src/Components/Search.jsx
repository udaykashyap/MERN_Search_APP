import { Box, Input } from "@chakra-ui/react";
import React from "react";

const Search = () => {
  const handleInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <Box bgColor={"#16181e"} h="100vh">
      {/* Navbar Start Here*/}
      <Box width={"100%"}>
        <Input
          width={{ base: "90%", md: "90%", xl: "70%" }}
          h={{ base: "60px", md: "60px", xl: "60px" }}
          padding="20px"
          outline="none"
          border={"none"}
          borderRadius="5px"
          margin="10px"
          backgroundColor="#252833"
          color="#ffff"
          type="text"
          placeholder="Search Here"
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </Box>
    </Box>
  );
};

export default Search;
