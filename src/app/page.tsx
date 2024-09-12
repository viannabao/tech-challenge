'use client';

import { Heading, Button, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/information');
  };

  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Heading as="h1" size="xl" mb={6} role="heading" aria-level={1}>
        Welcome
      </Heading>

      <Button
        variant="solid"
        colorScheme="yellow"
        size="lg"
        onClick={handleNavigation}
        _hover={{ bg: 'yellow.200' }}
        _focus={{ boxShadow: 'outline' }}
        aria-label="View Pokémon information in the Pokédex"
      >
        View Pokédex
      </Button>
    </VStack>
  );
}