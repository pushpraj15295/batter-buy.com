import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import Otp from "../components/Otp"
const init={
   
   name:"",
   email: "",
   country: "",
   state: "",
   zip:"",
   carttype: "",
   cartnumber: "",
   cartexpdate:"",
   cartexpyear: "",
   cvv:""
}

const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = useRef(null)
    const finalRef = useRef(null)
  const [creds, setCreds] = useState(init);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("checkout details", creds);
    localStorage.setItem("checkoutDetails", JSON.stringify(creds));
  };

  return (
    <Flex>
      <Box width="100%">
        <Box
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
          width="40%"
          margin="auto"
          padding="10px"
          marginTop="20px"
        >
          <>
            <Box padding="20px">
              <Text fontSize="25px" fontWeight="bolt" textAlign="center">
                Billing details
              </Text>
              <br />
              <FormControl isRequired>
                <FormLabel>First & Last name</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Enter name"
                    _hover={{ border: "1px solid lightgrey" }}
                    borderRadius="none"
                    onChange={handleChange}
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
                    onChange={handleChange}
                    name="email"
                  ></Input>
                </InputGroup>
              </FormControl>
              <br />
              <FormControl isRequired>
                <FormLabel>Country</FormLabel>
                <InputGroup>
                  <Select
                    placeholder="select country"
                    size="md"
                    onChange={handleChange}
                    name="country"
                  >
                    <option value="India">India</option>
                    <option value="usa">USA</option>
                    <option value="japan">japan</option>
                    <option value="Srilanka">Srilanka</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="UAE">UAE</option>
                    <option value="bangladesh">Bangladesh</option>
                  </Select>
                </InputGroup>
              </FormControl>
              <br />
              <SimpleGrid columns={[1, 1, 2, 2, 2]} gap="1rem">
                <Box>
                  <FormControl isRequired>
                    <FormLabel>State</FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="Enter State"
                        _hover={{ border: "1px solid lightgrey" }}
                        borderRadius="none"
                        onChange={handleChange}
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
                        onChange={handleChange}
                        name="zip"
                      ></Input>
                    </InputGroup>
                  </FormControl>
                </Box>
              </SimpleGrid>
              <br />
              <br />
              <Text fontSize="25px" fontWeight="bolt" textAlign="center">
                {" "}
                Payment Method
              </Text>
              <br />
              <FormControl isRequired>
                <FormLabel>Cart Type</FormLabel>
                <InputGroup>
                  <Select
                    placeholder="select your Cart"
                    size="lg"
                    onChange={handleChange}
                    name="carttype"
                  >
                    <option value="debit">Debit card</option>
                    <option value="credit">credit card</option>
                  </Select>
                </InputGroup>
              </FormControl>
              <br />
              <FormControl isRequired>
                <FormLabel>Cart number</FormLabel>
                <InputGroup>
                  <Input
                    type="number"
                    placeholder="Enter card number"
                    _hover={{ border: "1px solid lightgrey" }}
                    borderRadius="none"
                    onChange={handleChange}
                    name="cartnumber"
                  ></Input>
                </InputGroup>
              </FormControl>
              <br />
              <SimpleGrid columns={[1, 1, 2, 3, 3]} gap="1rem">
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Expiration Date</FormLabel>
                    <InputGroup>
                      <Select
                        placeholder="select Month"
                        size="md"
                        onChange={handleChange}
                        name="cartexpdate"

                      >
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </Select>
                    </InputGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Year</FormLabel>
                    <InputGroup>
                      <Select
                        placeholder="select year"
                        size="md"
                        onChange={handleChange}
                        name="cartexpyear"
                      >
                        <option value="2030">2030</option>
                        <option value="2029">2029</option>
                        <option value="2028">2028</option>
                        <option value="2027">2027</option>
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                      </Select>
                    </InputGroup>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>security code</FormLabel>
                    <InputGroup>
                      <Input
                        type="number"
                        placeholder="Enter CVV"
                        _hover={{ border: "1px solid lightgrey" }}
                        borderRadius="none"
                        onChange={handleChange}
                        name="cvv"
                      ></Input>
                    </InputGroup>
                  </FormControl>
                </Box>
              </SimpleGrid>
              <br />
              <Text fontSize="12px" color="black.400">
                By clicking the button you agree to the{" "}
                <a>Terms and Conditions</a>
              </Text>

              <Button
                width="100%"
                color="black"
                backgroundColor="rgb(60,193,1)"
                onClick={onOpen}
              >
                Place order
              </Button>
            </Box>

            <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
              <Otp email={creds.email} pin={1234}  />  
            
          </ModalContent>
            </Modal>


            {/* next Box ******************************************************************************/}
            <Box></Box>
          </>
        </Box>
      </Box>
    </Flex>
  );
};

export default Checkout;
