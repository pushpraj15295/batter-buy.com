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
import { FcGoogle } from 'react-icons/fc';
import {AiOutlineGithub} from 'react-icons/ai'
import {MdEmail} from "react-icons/md"

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
        <Box width="35%" margin="auto" marginTop="25px" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" padding="25px" borderRadius="4px">
          <Text fontSize="30px" fontWeight="bold" textAlign="center">
            Sign up
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
                 <Box><Link to="/forgetpassword" > <Text fontSize="15px" fontWeight="bold" _hover={{ textDecoration:"underline" }}>Forgot Password</Text> </Link></Box>
                 <Box> <Link to="/login" > <Text fontSize="15px" fontWeight="bold" _hover={{ textDecoration:"underline" }}>already have an account</Text> </Link></Box>
            </Flex>

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


          <br /><br />
         <Flex>
             <Box borderTop="2px solid" width="45%"></Box>
              <Box border="2px solid black" padding="5px"><Text>OR</Text></Box>   
              <Box borderBottom="2px solid" width="45%"></Box>
         </Flex>
         <br />
         <Flex justifyContent="space-evenly">
            <Box><a href=""><FcGoogle size={45} /></a></Box>
            <Box><a href="https://github.com/login/oauth/authorize?client_id=45fe4026a9cfec945bda"><AiOutlineGithub size={45}/></a></Box>
            <Box><a href=""><MdEmail size={45}/></a></Box>
         </Flex>
        </Box>
        
      </Box>
    </Flex>
  );
};

export default Signup;
