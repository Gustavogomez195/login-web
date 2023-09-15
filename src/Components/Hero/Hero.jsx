import { Text } from "@chakra-ui/react";

const Hero = () => {
  const Textstyle = {
    mt: "100px",
    ml: "35px",
    fontFamily: "roboto, sans-serif",
    fontSize: "33px",
    fontWeigth: "bold",
    textAlign: "justify",
  };
  return (
    <>
      <Text sx={Textstyle}> Welcome to El-Shoes</Text>
      <Text
        ml="35px"
        fontFamily="roboto, sans-serif"
        fontSize="20px"
        color="gray"
      >
        For better experience with your shoes!
      </Text>
    </>
  );
};

export { Hero };
