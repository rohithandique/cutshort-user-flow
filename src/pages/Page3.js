import React, { useState } from 'react'
import Progress from '../layout/Progress'
import { 
  Container, Center, SimpleGrid, Box, Heading, Text, Button, VStack, useToast
} from '@chakra-ui/react'
import { FaUser, FaUsers} from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import Header from '../layout/Header';

export default function Page3() {

  const navigate = useNavigate()

  const [ firstActive, setFirstActive ] = useState(false)
  const [ secondActive, setSecondActive ] = useState(false)

  const toast = useToast()
  const id = 'toast'

  const handleSelect = num => {
    if(num===1) {
      setSecondActive(false)
      setFirstActive(true)
    } else {
      setFirstActive(false)
      setSecondActive(true)
    }
  }

  const handleClick = () => {
    if(!firstActive && !secondActive) {
      if (!toast.isActive(id)) {
        toast({
          toast,
          title: 'Invalid Workspace Type',
          description: "Please select a type.",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
      return;
    }
    navigate("/page4")
  }

  return (
    <>
      <Header />
      <Progress page={3}/>
      <Container>
        <Center>
          <VStack>
            <Heading as='h1' size='lg'>
              How are you planning to use Eden?
            </Heading>
            <Text>
              We'll streamline your setup experience accordingly.
            </Text> 
            <SimpleGrid columns={[1, null, 2]} spacing="24px">
              <Box 
                cursor="pointer" onClick={()=>handleSelect(1)} 
                borderStyle="solid" borderWidth={firstActive ? '3px' : '2px'} borderColor={firstActive ? '#674ce6' : 'gray'}
                padding="20px" borderRadius="10px"
              >
                <SimpleGrid columns={1} spacing="24px">
                  <FaUser color={firstActive ? '#674ce6' : 'gray'}/>
                  <Box>
                    <Heading as="h2" size="md" mb="10px">For Myself</Heading>
                    <Text>
                      Write better. Think more clearly. Stay organized.
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
              <Box 
                cursor="pointer" onClick={()=>handleSelect(2)} 
                borderStyle="solid" borderWidth={secondActive ? '3px' : '2px'} borderColor={secondActive ? '#674ce6' : 'gray'}
                padding="20px" borderRadius="10px"
              >
                <SimpleGrid columns={1} spacing="24px">
                  <FaUsers color={secondActive ? '#674ce6' : 'gray'}/>
                  <Box>
                    <Heading as="h2" size="md" mb="10px">With my team</Heading>
                    <Text>
                      Wikis, docs, tasks &#38; projects, all in one place.
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </SimpleGrid>
            <Center>
              <VStack mt="10px">
                <Button w="400px" bg="#674ce6" color="white"
                  _hover={{
                    bg: '#9889e0'
                  }}
                  onClick={handleClick}
                  rightIcon={<ArrowForwardIcon />}
                >Create Workspace</Button>
                <Button w="400px" bg="gray" color="white"
                    _hover={{
                      bg: 'lightgray'
                    }}
                    onClick={()=>navigate("/page2")}
                    leftIcon={<ArrowBackIcon />}
                  >Go Back</Button>
              </VStack>
            </Center>
          </VStack>
        </Center>
      </Container>
    </>
    
  )
}
