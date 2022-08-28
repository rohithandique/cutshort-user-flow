import React from 'react'
import { Container, Center, Image, Text } from '@chakra-ui/react'
import Logo from "../assets/images/logo.png"
import { Link as RouterLink } from 'react-router-dom'

export default function Header() {
  return (
    <Container>
      <RouterLink to="/page1">
        <Center my="40px">
          <Image src={Logo} h="40px"/>
          <Text as="b" fontSize='4xl'>Eden</Text>
        </Center>
      </RouterLink>  
    </Container>
  )
}
