import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const init = {
  name: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [creds, setCreds] = useState(init);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit=(e) => {
     e.preventDefault();
     console.log("cred", creds)

  }

  return (
    <Flex>
      <Box width="100%">
        <Box width="40%" margin="auto" marginTop="35px">
          <Text fontSize="30px" fontWeight="bold" textAlign="center">
            Create an account
          </Text>
          <br />
          <br />
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <InputGroup>
              <Input
                _hover={{ border: "1px solid black" }}
                borderRadius="none"
                  height="45px"
                onChange={handleChange}
                name="name"
              ></Input>
            </InputGroup>
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <Input
                _hover={{ border: "1px solid black" }}
                borderRadius="none"
                  height="45px"
                onChange={handleChange}
                name="email"
              ></Input>
            </InputGroup>
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                  height="45px"
                borderRadius="none"
                _hover={{ border: "1px solid black" }}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <br />
          <Flex margin="5px" justifyContent="space-between">
                 <Box><Link to="#" > <Text fontSize="15px" fontWeight="bold" _hover={{ textDecoration:"underline" }}>Forgot Password</Text> </Link></Box>
                 <Box> <Link to="/login" > <Text fontSize="15px" fontWeight="bold" _hover={{ textDecoration:"underline" }}>already have an account</Text> </Link></Box>
            </Flex>
          <br />
          <Button
            height="45px"
            loadingText="Submitting"
            color="white"
            _hover={{ border: "1px solid black" }}
            borderRadius="none"
            width="100%"
            backgroundColor="rgb(31,31,31)"
            onClick={handleSubmit}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Signup;
