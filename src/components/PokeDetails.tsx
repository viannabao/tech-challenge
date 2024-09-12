import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Image,
  Text,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { PokemonDetail } from "@/types/Pokemon";

type PokeDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
  pokemon: PokemonDetail;
};

const PokeDetails = ({ isOpen, onClose, pokemon }: PokeDetailsProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xs"
      isCentered
      motionPreset="slideInBottom"
      aria-labelledby="pokemon-details-title"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader id="pokemon-details-title">
          <Tag
            size="md"
            variant="solid"
            colorScheme="gray"
            borderRadius="full"
            mr={2}
          >
            <TagLabel>NO.{pokemon.id}</TagLabel>
          </Tag>
          {pokemon.name.toUpperCase()}
        </ModalHeader>
        <ModalCloseButton aria-label="Close Pokemon details modal" />
        <ModalBody px={6} pb={6}>
          <Image
            width="100%"
            mb={3}
            src={pokemon.sprites.front_default}
            alt={`Image of ${pokemon.name}`}
          />

          <Text fontWeight="bold" mt={4} id="pokemon-types-label">
            Types
          </Text>
          <Wrap aria-labelledby="pokemon-types-label" spacing={2} mt={2}>
            {pokemon.types.map((type) => (
              <WrapItem key={type.type.name}>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme="blue"
                  borderRadius="full"
                >
                  <TagLabel>{type.type.name}</TagLabel>
                </Tag>
              </WrapItem>
            ))}
          </Wrap>

          <Text fontWeight="bold" mt={4} id="pokemon-abilities-label">
            Abilities
          </Text>
          <Wrap aria-labelledby="pokemon-abilities-label" spacing={2} mt={2}>
            {pokemon.abilities.map((ability) => (
              <WrapItem key={ability.ability.name}>
                <Tag
                  size="md"
                  variant="subtle"
                  colorScheme="purple"
                  borderRadius="full"
                >
                  <TagLabel>{ability.ability.name}</TagLabel>
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PokeDetails;
