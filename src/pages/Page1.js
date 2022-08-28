import React, { useRef } from 'react'
import Progress from '../layout/Progress'
import { 
  Container, Center, VStack, Heading, Text,
  FormControl, FormLabel, Input, Button, useToast
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { useAuth } from '../contexts/AuthContext';
import Header from '../layout/Header';

export default function Page1() {

  const navigate = useNavigate()

  const { setName } = useAuth()

  const fullNameRef = useRef()
  const displayNameRef = useRef()

  const toast = useToast()
  const id = 'toast'

  const handleClick = () => {
    if(!fullNameRef.current.value) {
      if (!toast.isActive(id)) {
        toast({
          toast,
          title: 'Empty Name',
          description: "Please enter your full name",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
      return;
    }
    if(!displayNameRef.current.value) {
      if (!toast.isActive(id)) {
        toast({
          toast,
          title: 'Empty Username',
          description: "Please enter your display name",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
      return;
    }
    setName(displayNameRef.current.value);
    navigate("/page2");
  }

  return (
    <>
      <Header />
      <Progress page={1}/>
      <Container>
        <Center>
          <VStack spacing="24px">
            <Heading as='h1' size='lg'>
              Welcome! First things first...
            </Heading>
            <Text>
              You can always change them later.
            </Text>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input type="text" placeholder='Steve Jobs' ref={fullNameRef} />
              <FormLabel>Display Name</FormLabel>
              <Input type="text" placeholder='Steve' ref={displayNameRef}/>
              <Center mt="10px">
                <Button w="400px" bg="#674ce6" color="white"
                  _hover={{
                    bg: '#9889e0'
                  }}
                  onClick={handleClick}
                  rightIcon={<ArrowForwardIcon />}
                >Next</Button>
              </Center>
            </FormControl>
          </VStack>
        </Center>
      </Container>
    </>
    
  )
}
