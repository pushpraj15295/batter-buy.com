import { ChevronRightIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Image, Text } from '@chakra-ui/react'
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
            <Flex border={"1px solid red"} h="45vh" >
              <Box w="60%" >
                <Table>
                  <Tr>
                    <Th border={'1px solid gray'}><Image w={'30%'}  border="1px solid black" src='https://bit.ly/3E0lkP0' alt='product' /></Th>
                    <Th  border={'1px solid gray'}>
                      <Text textAlign={"left"} >Quick & Easy 6 Blade Push Chopper 1000ML - RED</Text>
                      <Flex>
                        
                      </Flex>
                    </Th>
                    <Th></Th>
                  </Tr>
                </Table>
              </Box>
              <Box w="40%" ></Box>
            </Flex>
            
        </Box>
  )
}

export default Cart