import React from 'react'
import Progress from '../layout/Progress'
import { 
  Container, Center, VStack, Heading, Text, Button, Circle, useToast
} from '@chakra-ui/react'
import { CheckIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useAuth } from '../contexts/AuthContext'
import Header from '../layout/Header';

export default function Page4() {

  const toast = useToast();
  const id = "toast"

  const { name } = useAuth()

  return (
    <>
      <Header />
      <Progress page={4}/>
      <Container>
        <Center>
          <VStack spacing="24px" mt="40px">
            <Circle size="60px" bg="#674ce6">
              <CheckIcon color="white"/>
            </Circle>
            <Heading as='h1' size='lg'>
              Congratulations, {name}!
            </Heading>
            <Text>
              You have completed onboarding, you can start using the Eden!
            </Text>
            <Center mt="10px">
              <Button w="400px" bg="#674ce6" color="white"
                _hover={{
                  bg: '#9889e0'
                }}
                onClick={() => {
                  if (!toast.isActive(id)) {
                    toast({
                      id,
                      title: 'Launching Eden..',
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    })
                  }
                }}
                rightIcon={<ArrowForwardIcon />}
              >Launch Eden</Button>
            </Center>
          </VStack>
        </Center>
      </Container>
    </>
    
  )
}
