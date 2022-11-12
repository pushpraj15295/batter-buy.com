import { Box, Center, Heading, Text } from '@chakra-ui/react';
import {
    Button,
    FormControl,
    Flex,
    Input,
    Stack,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { PinInput, PinInputField } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerifyEmailForm({ email, pin }) {
    const [code, setCode] = useState(null)
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
        console.log(e)
        setCode(e)
    }
    const handleSubmit = () => {
        if (code == pin) {
            navigate("/success");
        }
    }
   
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'sm'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={10}>
                <Center>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Verify your Email
                    </Heading>
                </Center>
                <Center
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    We have sent code to your email
                </Center>
                <Center
                    fontSize={{ base: 'sm', sm: 'md' }}
                    fontWeight="bold"
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    {email}
                </Center>
                <FormControl>
                    <Center>
                        <HStack>
                            <PinInput onChange={(event) => handleChange(event)}>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </Center>
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={handleSubmit}
                    >
                        Verify
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}