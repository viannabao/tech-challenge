'use client';

import { Box, Heading, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box textAlign="center" py={10}>
      <Heading as="h1" size="xl" mb={6}>
        Welcome to the Home Page
      </Heading>
      <Button colorScheme="teal" size="lg">
        Home Content
      </Button>
    </Box>
  )
}