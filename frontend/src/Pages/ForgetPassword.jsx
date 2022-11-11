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
  email: "",
};
const ForgetPassword = () => {
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
        <Box width="25%" margin="auto" marginTop="35px" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" padding="25px" borderRadius="4px">
          <Text fontSize="30px" fontWeight="bold" textAlign="center">
           Forget Password
          </Text>
          <br />
          <br />
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <Input
                _hover={{ border: "1px solid black" }}
                borderRadius="none"
                onChange={handleChange}
                name="email"
              ></Input>
            </InputGroup>
          </FormControl>
          
          <Flex margin="5px" justifyContent="space-between">
                 <Box><Link to="/login" > <Text fontSize="15px" fontWeight="bold" _hover={{ textDecoration:"underline" }}>Return Login</Text> </Link></Box>
                 <Box> <Link to="/signup" > <Text fontSize="15px" fontWeight="bold" _hover={{ textDecoration:"underline" }}>Create an account</Text> </Link></Box>
            </Flex>
          <br />
          <Button
            loadingText="Submitting"
            color="white"
            _hover={{ border: "1px solid black" }}
            borderRadius="none"
            width="100%"
            backgroundColor="rgb(60,193,1)"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default ForgetPassword;