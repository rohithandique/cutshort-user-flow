import React, { useRef } from 'react'
import Progress from '../layout/Progress'
import { 
  Container, Center, VStack, Heading, Text,
  FormControl, FormLabel, Input, InputGroup, InputLeftAddon,
  Button, Highlight, useToast
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import Header from '../layout/Header';

export default function Page2() {

  const navigate = useNavigate()
  const toast = useToast()
  const id = 'toast'

  const workspaceNameRef = useRef()
  const workspaceURLRef = useRef()

  const handleClick = () => {
    if(!workspaceNameRef.current.value) {
      if (!toast.isActive(id)) {
        toast({
          toast,
          title: 'Empty Name',
          description: "Please enter your workspace's name",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
      return;
    }
    if(!workspaceURLRef.current.value) {
      if (!toast.isActive(id)) {
        toast({
          toast,
          title: 'Empty URL',
          description: "Please enter your workspace's URL",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
      return;
    }
    navigate("/page3");
  }

  return (
    <>
      <Header />
      <Progress page={2}/>
      <Container>
        <Center>
          <VStack spacing="24px">
            <Heading as='h1' size='lg'>
              Let's set up a home for all your work
            </Heading>
            <Text>
              You can always create another workspace later.
            </Text>
            <FormControl>
              <FormLabel>Workspace Name</FormLabel>
              <Input type="text" placeholder='Eden' ref={workspaceNameRef} />
              <FormLabel>
                <Highlight query='(optional)' styles={{ color: 'lightgray' }}>
                  Workspace URL (optional)
                </Highlight>              
              </FormLabel>
              <InputGroup>
                <InputLeftAddon children='www.eden.com/' color="lighgray" />
                <Input type="text" placeholder='Example' ref={workspaceURLRef} />
              </InputGroup>
              
              <Center mt="10px">
                <VStack>
                  <Button w="400px" bg="#674ce6" color="white"
                    _hover={{
                      bg: '#9889e0'
                    }}
                    onClick={handleClick}
                    rightIcon={<ArrowForwardIcon />}
                  >Next</Button>
                  <Button w="400px" bg="gray" color="white"
                    _hover={{
                      bg: 'lightgray'
                    }}
                    onClick={()=>navigate("/page1")}
                    leftIcon={<ArrowBackIcon />}
                  >Go Back</Button>
                </VStack>
              </Center>
            </FormControl>
          </VStack>
        </Center>
      </Container>
    </>
  )
}
