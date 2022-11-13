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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const init = {
  otp: "",
  newpassword:""
};
const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [creds, setCreds] = useState(init);
const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit=(e) => {
     e.preventDefault();
     console.log("update pass", creds)
   navigate("/")
  }

  return (
    <Flex>
      <Box width="100%">
        <Box width="30%" margin="auto" marginTop="35px" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;" padding="25px" borderRadius="4px">
          <Text fontSize="30px" fontWeight="bold" textAlign="center">
           Set Your new password
          </Text>
          <br />
          <br />
          <FormControl isRequired>
            <FormLabel>OTP</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "number" : "password"}
                name="otp"
                onChange={handleChange}
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
          <FormControl isRequired>
            <FormLabel>New Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                name="newpassword"
                onChange={handleChange}
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

export default ResetPassword