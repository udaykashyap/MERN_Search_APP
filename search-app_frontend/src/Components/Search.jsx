import { Box, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Search.css";
import Card from "./Card";
import Footer from "./Footer";

const Search = () => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(false);

  //onInput function which get the data according to the search
  const handleInput = (e) => {
    let search = e.target.value;
    setTimeout(() => {
      getData(search);
    }, 1000);
  };

  //On mounting the page the all data will show to the dom
  const getData = async (search = "") => {
    try {
      setLoading(true);
      let ress = await fetch(`http://localhost:8080/user/?q=${search}`);
      let data = await ress.json();
      console.log(data);
      setGigs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box bgColor={"#16181e"}>
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
          onInput={(e) => handleInput(e)}
        />
      </Box>

      {/* Card Section */}
      {loading ? (
        <Text color={"white"} fontSize={"42px"} width={"50%"} margin={"auto"}>
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
        </Text>
      ) : (
        //card container
        <Box minH={"79vh"} borderBottom={"1px solid gray"}>
          <Box
            id="cardContainer"
            display={"grid"}
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              xl: "repeat(3,1fr)",
            }}
            gap={"20px"}
            padding={"2%"}
          >
            {/* Maping the all data in card format */}
            {gigs.length > 0 &&
              gigs.map((e) => {
                return <Card {...e} />;
              })}
          </Box>
        </Box>
      )}

      {/* Footer Start From Here */}
      <Footer />
    </Box>
  );
};

export default Search;
