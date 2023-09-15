import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import lista from "../../assets/list.svg";

const Navbar = () => {
  const textoStyle = {
    ms: "8",
    fontSize: "30",
    fontFamily: " Lobster Two, cursive",
    fontWeight: "bold",
  };

  return (
    <Flex justify="space-between" mx="60px">
      <Box display="flex">
        <Image borderRadius="40%" boxSize="50px" src={logo} alt="logo" />
        <Text sx={textoStyle}>El Shoes</Text>
      </Box>
      <Image width={"5%"} src={lista} alt="" />
    </Flex>
  );
};

export { Navbar };
