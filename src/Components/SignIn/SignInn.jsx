import {
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

const SignInn = () => {
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
            type="text"
            placeholder="Usename / Email"
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

        <Text ms="80px" mt="20px" color="gray" fontSize="14px">
          Don´t have an account?{" "}
          <Link color="black" href="/">
            Sign Up
          </Link>
        </Text>
      </Container>
    </>
  );
};

export { SignInn };
