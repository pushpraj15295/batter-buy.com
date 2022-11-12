import { ChevronRightIcon, CloseIcon, MinusIcon, AddIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate=useNavigate()
  const token  = useSelector(store=>store.auth.token)
  const { products } = useSelector((state) => state.prodReducer);
  const arr = JSON.parse(localStorage.getItem("cart"))
  console.log(arr)
  let sum = arr.reduce((init,acc)=>{
    return init+acc.price
  },0)

  const removeItem = (element)=>{
    const list = arr.filter(e=>{
      return e._id!==element._id
    })
    console.log(list);
    localStorage.setItem("cart", JSON.stringify(list));
    setCartItems(list)
  }
  const [cartItems, setCartItems] = useState(arr)
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
               {/* Each Items  */}
               {
                  arr.map((e)=>{
                     return  <Box>
                        <Table>
                          <Tr>
                            <Th w={'30%'}><Image w={'80%'} src={`${e.img[0]}`} alt='product' /></Th>
                            <Th >
                              <Text textAlign={"left"} >{e.title}</Text>
                              <br />
                              <Flex padding={2} gap="2" alignItems={'center'} border="1px solid black" w='fit-content'>
                                <MinusIcon />
                                  1
                                <AddIcon />
                              </Flex>
                            </Th>
                            <Th>
                            <Text textAlign={"left"} fontSize="xl">₹{e.price}</Text>
                              <br />
                              <Flex padding={2} gap="2" alignItems={'center'}  w='fit-content' onClick={()=>removeItem(e)}>
                                <CloseIcon />
                                  Remove
                              </Flex>
                            </Th>
                          </Tr>
                        </Table>
                      </Box>
                  })
               }
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
                    <Th fontWeight={600} fontSize={'xl'}>₹{sum}</Th>
                  </Tr>
                  <Tr>
                    <Th fontWeight={700} fontSize={'xl'} >Total</Th>
                    <Th fontWeight={700} fontSize={'xl'}>₹{sum}</Th>
                  </Tr>
                  <Tr>
                     <Flex alignItems='center' gap={1} ml="7"><Text fontSize="sm">Or 3 interest free payments of ₹266.01 with</Text> <Image src='https://bit.ly/3ttLBA9' w={50} /></Flex>
                  </Tr>
                </Table>
                <br />
                <Button bg={'black'} color={"white"} onClick={()=>{setTimeout(()=>navigate("/checkout"),1000)}} ml="7">Proceed to Checkout</Button>
                <br />
                <Flex ml={7} alignItems={'center'} gap={'2'}><ArrowBackIcon/><Text>Continue Shopping</Text></Flex>
              </Box>
            </Flex>
            
        </Box>
  )
}

export default Cart