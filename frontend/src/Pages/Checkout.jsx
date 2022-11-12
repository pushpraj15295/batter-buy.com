import { Box, Button, Flex, FormControl, FormLabel, Input, InputGroup, Select, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Checkout = () => {
  return (
    <Flex>
      <Box>
         <Box>
             <Flex>
             <Box>
          <Text fontSize="25px" fontWeight="bolt" >Billing details</Text>
          <br />
          <FormControl isRequired>
            <FormLabel>First & Last name</FormLabel>
            <InputGroup>
              <Input
                placeholder="Enter name"
                _hover={{ border: "1px solid lightgrey" }}
                borderRadius="none"
                // onChange={handleChange}
                name="name"
              ></Input>
            </InputGroup>
          </FormControl>
      
          <br />
          <FormControl isRequired>
            <FormLabel>Email Adddress</FormLabel>
            <InputGroup>
              <Input
                placeholder="Enter Email"
                _hover={{ border: "1px solid lightgrey" }}
                borderRadius="none"
                // onChange={handleChange}
                name="email"
              ></Input>
            </InputGroup>
          </FormControl>
          <br />
          <FormControl isRequired>
            <FormLabel>Country</FormLabel>
            <InputGroup>
            <Select placeholder='select country' size='md' />
            </InputGroup>
          </FormControl>
          <br />
           <SimpleGrid columns={[1,1,2,2,2]} gap="1rem" >
               <Box>
               <FormControl isRequired>
            <FormLabel>State</FormLabel>
            <InputGroup>
              <Input
                placeholder="Enter State"
                _hover={{ border: "1px solid lightgrey" }}
                borderRadius="none"
                // onChange={handleChange}
                name="state"
              ></Input>
            </InputGroup>
          </FormControl>
               </Box>
                <Box>
                <FormControl isRequired>
            <FormLabel>Zip / postal code</FormLabel>
            <InputGroup>
              <Input
                type="number"
                placeholder="Enter zip"
                _hover={{ border: "1px solid lightgrey" }}
                borderRadius="none"
                // onChange={handleChange}
                name="zip"
              ></Input>
            </InputGroup>
          </FormControl>
                </Box>
           </SimpleGrid>
            <br /><br />
            <Text fontSize="25px" fontWeight="bolt" > Payment Method</Text>
            <br />
            <FormControl isRequired>
            <FormLabel>Cart Type</FormLabel>
            <InputGroup>
            <Select placeholder='select your Cart' size='lg' />
            </InputGroup>
          </FormControl>
          <br />
          <Text fontSize="25px" fontWeight="bolt" > Cart number</Text>
            <br />
            <FormControl isRequired>
            <FormLabel>Cart Type</FormLabel>
            <InputGroup>
            <Select placeholder='select your Cart' size='md' />
            </InputGroup>
          </FormControl>
          <br />
          <SimpleGrid columns={[1,1,2,3,3]} gap="1rem" >
               <Box>
               <FormControl isRequired>
            <FormLabel>Expiration Date</FormLabel>
            <InputGroup>
            <Select placeholder='select Month' size='md' />
            </InputGroup>
          </FormControl>
               </Box>
               <Box>
               <FormControl isRequired>
            <FormLabel>Year</FormLabel>
            <InputGroup>
            <Select placeholder='select year' size='md' />
            </InputGroup>
          </FormControl>
               </Box>
                <Box>
                <FormControl isRequired>
            <FormLabel>security code</FormLabel>
            <InputGroup>
              <Input
                type="number"
                placeholder="Enter zip"
                _hover={{ border: "1px solid lightgrey" }}
                borderRadius="none"
                // onChange={handleChange}
                name="zip"
              ></Input>
            </InputGroup>
          </FormControl>
                </Box>
           </SimpleGrid>
             <br />
             <Text>By clicking the button you agree to the <a>Terms and Conditions</a></Text>

             <Button width="100%" color='black'>Place order</Button>
           
        </Box>
           

          {/* next Box ******************************************************************************/}
           <Box></Box>
             </Flex>
         </Box>
      </Box>
    </Flex>
  );
};

export default Checkout;
