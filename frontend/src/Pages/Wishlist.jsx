import { ChevronRightIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react';

const Wishlist = () => {
    return (
        <Box w={"70%"} m={'auto'}>

            {/* Breadcrumbs  */}
            <Box color={'gray'}>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Wishlist</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>

            <br />
            <br />

            {/* Main Heading  */}
            <Text fontSize={"3xl"} textAlign='center' fontWeight='600' fontFamily={"sans"}>Wishlist</Text>

            {/* Table  */}
            <Box>
                {/* Table Heading  */}
                <Text fontSize={"4xl"} textAlign={["center","left","left"]} fontWeight={"800"} fontFamily={"sans"}>My wishlist</Text>
                <br />
                <br />
                <br />
                {/* Table  */}
                <Table w='fit-content' m={'auto'} display={['none','none','none','block','block']} >
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th></Th>
                            <Th>Product name</Th>
                            <Th>Unit Price</Th>
                            <Th>Stock Status</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {wItems.map((e)=>{
                         return <Tr>
                            <Td><CloseIcon/></Td>
                            <Td> <Image w={'70px'} src={`${e.image}`} alt="Product"/> </Td>
                            <Td> <Text fontWeight={600} >{e.name}</Text> </Td>
                            <Td> <Text >{e.price}</Text> </Td>
                            <Td> <Text color={'green'} fontWeight={600} >{e.stock}</Text> </Td>
                            <Td> <Button bg={'black'} color='white'>Add to cart</Button> </Td>
                         </Tr>
                        })}
                    </Tbody>
                </Table>    

                {/* Table for small and medium screens  */}
                <Box display={['block','block','block','none','none']} >
                    <Box>
                        <Table>
                            <Tr>
                                <Th><Text fontWeight={600} >M.S. body 2 in 1 pulverizer with ISI motor</Text></Th>
                                <Th><Image w={'70px'} src="https://bit.ly/3Epbg3q" alt="Product"/></Th>
                            </Tr>
                            <Tr>
                                <Th>Price:</Th>
                                <Th><Text >₹27,699.00</Text></Th>
                            </Tr>
                            <Tr>
                                <Th>Stock:</Th>
                                <Th><Text >In Stock</Text></Th>
                            </Tr>
                            <Tr>
                                <Th> <Button bg={'black'} color='white'>Add to cart</Button> </Th>
                            </Tr>
                        </Table>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Wishlist


const wItems = [
    {
        name: "M.S. body 2 in 1 pulverizer with ISI motor",
        image: "https://bit.ly/3Epbg3q",
        price: "₹27,699.00",
        stock: "In Stock"
    },
    {
        name: "M.S. body 2 in 1 pulverizer with ISI motor",
        image: "https://bit.ly/3Epbg3q",
        price: "₹27,699.00",
        stock: "In Stock"
    },
    {
        name: "M.S. body 2 in 1 pulverizer with ISI motor",
        image: "https://bit.ly/3Epbg3q",
        price: "₹27,699.00",
        stock: "In Stock"
    },
    {
        name: "M.S. body 2 in 1 pulverizer with ISI motor",
        image: "https://bit.ly/3Epbg3q",
        price: "₹27,699.00",
        stock: "In Stock"
    },
    {
        name: "M.S. body 2 in 1 pulverizer with ISI motor",
        image: "https://bit.ly/3Epbg3q",
        price: "₹27,699.00",
        stock: "In Stock"
    }
]