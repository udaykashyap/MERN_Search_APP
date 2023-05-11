import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

const Card = ({ ...e }) => {
  return (
    <Box
      color="white"
      key={e._id}
      boxShadow=" rgba(50, 50, 20, 0.25) 0px 50px 100px -20px, rgba(0, 0, 100, 0.38) 0px 30px 60px -30px, rgba(10, 37, 400, 1.35) 0px -2px 6px 0px inset;"
      padding={"2%"}
      borderRadius={"10px"}
    >
      <Image src={e.img} alt={"#"} height={"250px"} margin={"auto"} />
      <Text fontWeight={"600"} fontSize={"22px"}>
        {e.companies}
      </Text>
      <Text fontStyle={"italic"} fontWeight={"100"}>
        {e.headline}
      </Text>
      <Text>Comp. Description:- {e.description}</Text>

      <Text>
        Website :-{" "}
        <span style={{ color: "#0066ff", cursor: "pointer" }}>{e.url}</span>
      </Text>
      <Text>{e.primaryText}</Text>
    </Box>
  );
};

export default Card;
