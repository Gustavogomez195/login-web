import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Hero } from "../Components/Hero/Hero";
import { SignInn } from "../Components/SignIn/SignInn";

const SigIn = () => {
  const Fondostyle = {
    width: "60%",
    height: "100vh",
    backgroundImage: "url('src/assets/fondo.jpg') ",
    bgRepeat: "no-repeat",
    bgSize: "cover",
  };
  return (
    <>
      <Flex>
        <Box sx={Fondostyle}>
          <Hero />
        </Box>

        <Box width="100%" bg="#f5f5f5">
          <Navbar />
          <SignInn />
        </Box>
      </Flex>
    </>
  );
};

export { SigIn };
