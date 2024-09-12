import { Box, Image, Text } from "@chakra-ui/react";

type PokeCardProps = {
  name: string;
  image: string;
  onClick: () => void;
};

const PokeCard = ({ name, image, onClick }: PokeCardProps) => {
  return (
    <Box
      as="button" 
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={onClick}
      cursor="pointer"
      p={5}
      minWidth="230px"
      width="100%"
      height="250px"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      aria-label={`View details about ${name}`} 
      tabIndex={0} 
      _hover={{ boxShadow: "lg", transform: "scale(1.05)" }} 
      _focus={{ boxShadow: "outline" }}
    >
      <Image src={image} alt={`Image of ${name}`} loading="lazy" /> 
      <Box p="6">
        <Text fontWeight="bold" fontSize="lg" aria-label={name}>
          {name.toUpperCase()}
        </Text>
      </Box>
    </Box>
  );
};

export default PokeCard;