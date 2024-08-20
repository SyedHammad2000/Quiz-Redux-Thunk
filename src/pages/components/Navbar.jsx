import { Container, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Container width={"100%"}>
      <Text
        fontSize={32}
        fontFamily={"fantasy"}
        textAlign={["left", "center"]}
        _hover={{
          color: "red",
          transition:'0.4s ease '
        }}
      >
        Quiz Application
      </Text>
    </Container>
  );
};

export default Navbar;
