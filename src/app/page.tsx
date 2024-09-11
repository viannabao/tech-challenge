import { Box, Heading, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box textAlign="center" py={10}>
      <Heading as="h1" size="xl" mb={6}>
        Hello world
      </Heading>
      <Button colorScheme="teal" size="lg">
        Get Started
      </Button>
    </Box>
  )
}