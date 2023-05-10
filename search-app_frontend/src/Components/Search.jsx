import { Box, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Search = () => {
  const [gigs, setGigs] = useState([]);

  const handleInput = async (e) => {
    let inputData = e.target.value;
    let res = [];
    try {
      setTimeout(async () => {
        res = await fetch(
          `https://www.omdbapi.com/?apikey=a7c9e61b&s=${inputData}&page=1`
        );
        let data = await res.json();
        // setGigs(data.Search);
        console.log(data);
      }, [1000]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box bgColor={"#16181e"} h="100vh">
      {/* Navbar Start Here*/}
      <Box width={"100%"} borderBottom={"1px solid gray"}>
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

      {/* Card Section */}
      <Box id="cardContainer">
        {/* {gigs.length > 0 &&
          gigs.map((e) => {
            return (
              <>
                <h1>{e.Title}</h1>
              </>
            );
          })} */}
      </Box>
    </Box>
  );
};

export default Search;
