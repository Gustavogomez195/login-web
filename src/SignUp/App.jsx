import { Navbar } from "../Components/Navbar/Navbar";
import { Hero } from "../Components/Hero/Hero";
import { SignUp } from "../Components/SignUp/SignUp";
import { Box, Flex } from "@chakra-ui/react";

function App() {
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
          <SignUp />
        </Box>
      </Flex>
    </>
  );
}

export default App;
