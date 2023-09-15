import {
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { BotonesRedes } from "../BotonesRedes/BonesRedes";

const SignUp = () => {
  const ImputStyle = {
    mb: "5",
    bg: "#f0f0f0",
  };
  return (
    <>
      <Container mt="100px">
        <Heading mb={10}>Sign Up</Heading>
        <FormControl w={350} borderRadius="5%">
          <Input
            sx={ImputStyle}
            _placeholder={{ color: "gray", fontWeight: "bold" }}
            type="email tel"
            placeholder="Email or Phone"
          />
          <Input
            sx={ImputStyle}
            _placeholder={{ color: "gray", fontWeight: "bold" }}
            type="text"
            placeholder="Full Name"
          />
          <Input
            sx={ImputStyle}
            _placeholder={{ color: "gray", fontWeight: "bold" }}
            type="password"
            placeholder="Password"
          />
          <Button w="100%" bg="black" color="white" _hover="none" type="submit">
            Sign Up
          </Button>
        </FormControl>
        <Text ms="130px" mt="20px" color="gray" fontSize="14px">
          If feeling lazy?
        </Text>
        <BotonesRedes />

        <Text ms="100px" mt="20px" color="gray" fontSize="14px">
          Already a account?{" "}
          <Link color="black" href="/SignIn">
            Sing In
          </Link>
        </Text>
      </Container>
    </>
  );
};

export { SignUp };
