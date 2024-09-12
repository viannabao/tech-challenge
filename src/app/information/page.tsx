"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Text,
  CircularProgress,
  Center,
  Input,
  IconButton,
  HStack,
  FormControl,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { BasicPokemon, PaginatedPokemon, PokemonDetail } from "@/types/Pokemon";
import { fetchPokemonDetails, fetchPokemons } from "@/services/pokeService";
import { useSearchParams, useRouter } from "next/navigation";
import PokeCard from "@/components/PokeCard";
import PokeDetails from "@/components/PokeDetails";

const InformationPage = () => {
  const [pokemons, setPokemons] = useState<BasicPokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | null>(
    null
  );
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [goToPageInput, setGoToPageInput] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Determine the limit based on screen size (5 per page for mobile, 20 for desktop)
  const limit =
    typeof window !== "undefined" && window.innerWidth <= 768 ? 5 : 16;

  // Get the current page from the URL query parameter, default to 1 if not available
  const currentPage = parseInt(searchParams.get("page") || "1");
  const offset = (currentPage - 1) * limit;
  const totalPages = Math.ceil(totalCount / limit);

  // Fetch paginated Pokemon data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data: PaginatedPokemon = await fetchPokemons(limit, offset);
      setPokemons(data.results);
      setTotalCount(data.count);
      setIsLoading(false);
    };
    fetchData();
  }, [offset, limit]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      router.push(`/information?page=${nextPage}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      router.push(`/information?page=${prevPage}`);
    }
  };

  const handleGoToPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const page = parseInt(goToPageInput);
    if (page > 0 && page <= totalPages) {
      router.push(`/information?page=${page}`);
    }
  };

  // Handle Pokemon selection and fetch details
  const handlePokemonClick = async (pokemonName: string) => {
    const details: PokemonDetail = await fetchPokemonDetails(pokemonName);
    setSelectedPokemon(details);
    onOpen();
  };

  return (
    <Box p={[3, 5]}>
      {isLoading ? (
        <Center width="100%" height="100vh">
          <CircularProgress isIndeterminate color="black" />
        </Center>
      ) : (
        <Box
          width="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
          my={5}
        >
          <HStack
            my={4}
            px={3}
            spacing={4}
            alignItems="center"
            justifyContent={["center", "space-between"]}
            width="100%"
            maxWidth="1000px"
            flexWrap="wrap"
          >
            <form onSubmit={handleGoToPage}>
              <HStack spacing={2}>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Page"
                    value={goToPageInput}
                    onChange={(e) => setGoToPageInput(e.target.value)}
                    width="100px"
                    max={totalPages}
                    min={1}
                  />
                </FormControl>
                <Button
                  type="submit"
                  isDisabled={!goToPageInput || isNaN(parseInt(goToPageInput))}
                >
                  Go
                </Button>
              </HStack>
            </form>
            <HStack alignItems="center" gap={2}>
              <IconButton
                icon={<ArrowLeftIcon />}
                aria-label="Previous page"
                onClick={handlePrevPage}
                isDisabled={currentPage === 1}
              />

              <Text>
                {currentPage} of {totalPages}
              </Text>

              <IconButton
                icon={<ArrowRightIcon />}
                aria-label="Next page"
                onClick={handleNextPage}
                isDisabled={currentPage >= totalPages}
              />
            </HStack>
          </HStack>

          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(4, 1fr)",
            ]}
            gap={[4, 6]}
            maxWidth="1000px"
            justifyContent="center"
          >
            {pokemons.map((pokemon) => (
              <PokeCard
                key={pokemon.name}
                name={pokemon.name}
                image={pokemon.image}
                onClick={() => handlePokemonClick(pokemon.name)}
              />
            ))}
          </Grid>
        </Box>
      )}

      {selectedPokemon && (
        <PokeDetails
          isOpen={isOpen}
          onClose={onClose}
          pokemon={selectedPokemon}
        />
      )}
    </Box>
  );
};

export default InformationPage;
