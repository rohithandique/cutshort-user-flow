import React from 'react'
import { Container, Center, HStack, Circle } from "@chakra-ui/react"

export default function Progress(props) {

    const { page } = props;

    return (
    <Container>
        <Center my="40px">
            <HStack>
                <Circle size='40px' bg='#674ce6' color='white'>
                    1
                </Circle>
                <Circle size='40px' bg={page>=2 ? '#674ce6' : 'gray'} color='white'>
                    2
                </Circle>
                <Circle size='40px' bg={page>=3 ? '#674ce6' : 'gray'} color='white'>
                    3
                </Circle>
                <Circle size='40px' bg={page>=4 ? '#674ce6' : 'gray'} color='white'>
                    4
                </Circle>
            </HStack>
        </Center>
    </Container>
    )
}
