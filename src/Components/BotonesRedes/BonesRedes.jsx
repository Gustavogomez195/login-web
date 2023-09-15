import { Button, HStack } from "@chakra-ui/react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const BotonesRedes = () => {
  return (
    <HStack spacing={3} mt={10}>
      <Button w="170px" colorScheme="facebook" leftIcon={<FaFacebookF />}>
        Facebook
      </Button>
      <Button w="170px" colorScheme="blue" leftIcon={<FaGoogle />}>
        Google
      </Button>
    </HStack>
  );
};

export { BotonesRedes };
