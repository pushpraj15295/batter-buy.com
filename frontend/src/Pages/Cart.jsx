import { ChevronRightIcon, CloseIcon, MinusIcon, AddIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';
const Cart = () => {
  return (
    <Box w={"70%"} m={'auto'}>

            {/* Breadcrumbs  */}
            <Box color={'gray'}>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Cart</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>

            <br />
            <br />

            {/* Main Heading  */}
            <Text fontSize={"3xl"} textAlign='center' fontWeight='600' fontFamily={"sans"}>Cart</Text>
            <br /><br /><br />
            <Flex>
              <Box w="60%" >
               {/* Each Item  */}
               <Box>
                <Table>
                  <Tr>
                    <Th w={'30%'}><Image w={'80%'} src='https://bit.ly/3E0lkP0' alt='product' /></Th>
                    <Th >
                      <Text textAlign={"left"} >Quick & Easy 6 Blade Push Chopper 1000ML - RED</Text>
                      <br />
                      <Flex padding={2} gap="2" alignItems={'center'} border="1px solid black" w='fit-content'>
                        <MinusIcon />
                           1
                        <AddIcon />
                      </Flex>
                    </Th>
                    <Th>
                    <Text textAlign={"left"} fontSize="xl">₹399.00</Text>
                      <br />
                      <Flex padding={2} gap="2" alignItems={'center'}  w='fit-content'>
                        <CloseIcon />
                           Remove
                      </Flex>
                    </Th>
                  </Tr>
                </Table>
               </Box>
               <Box>
                <Table>
                  <Tr>
                    <Th w={'30%'}><Image w={'80%'} src='https://bit.ly/3E0lkP0' alt='product' /></Th>
                    <Th >
                      <Text textAlign={"left"} >Quick & Easy 6 Blade Push Chopper 1000ML - RED</Text>
                      <br />
                      <Flex padding={2} gap="2" alignItems={'center'} border="1px solid black" w='fit-content'>
                        <MinusIcon />
                           1
                        <AddIcon />
                      </Flex>
                    </Th>
                    <Th>
                    <Text textAlign={"left"} fontSize="xl">₹399.00</Text>
                      <br />
                      <Flex padding={2} gap="2" alignItems={'center'}  w='fit-content'>
                        <CloseIcon />
                           Remove
                      </Flex>
                    </Th>
                  </Tr>
                </Table>
               </Box>
                <br /><br />
               <Text>Coupon code:</Text>
                <Input w={'30%'} /> <Button bg={'black'} color={"white"}>Apply</Button>
                <br />
                <Button bg={'black'} color={"white"}>Share cart</Button>
              </Box>
              <Box w="40%" bg={'#f5f5f5'} h={'fit-content'} p={5} pb={50} mt={5}>
                <Table>
                  <Tr>
                    <Td fontWeight={600} fontSize={'xl'}>Subtotal</Td>
                    <Th fontWeight={600} fontSize={'xl'}>₹797.99</Th>
                  </Tr>
                  <Tr>
                    <Th fontWeight={700} fontSize={'xl'} >Total</Th>
                    <Th fontWeight={700} fontSize={'xl'}>₹797.99</Th>
                  </Tr>
                  <Tr>
                     <Flex alignItems='center' gap={1} ml="7"><Text fontSize="sm">Or 3 interest free payments of ₹266.01 with</Text> <Image src='https://bit.ly/3ttLBA9' w={50} /></Flex>
                  </Tr>
                </Table>
                <br />
                <Button bg={'black'} color={"white"}  ml="7">Proceed to Checkout</Button>
                <br />
                <Flex ml={7} alignItems={'center'} gap={'2'}><ArrowBackIcon/><Text>Continue Shopping</Text></Flex>
              </Box>
            </Flex>
            
        </Box>
  )
}

export default Cart