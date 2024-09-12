import { gql } from "@apollo/client";
import client from "./apolloClient";
import { PaginatedPokemon, PokemonDetail } from "@/types/Pokemon";

// GraphQL query for fetching paginated Pokemon data
export const GET_POKEMONS = gql`
  query getPokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

// Fetch paginated Pokemon data using Apollo Client
export const fetchPokemons = async (
  limit: number,
  offset: number
): Promise<PaginatedPokemon> => {
  const { data } = await client.query({
    query: GET_POKEMONS,
    variables: { limit, offset },
  });

  return data.pokemons;
};

// GraphQL query for fetching details of a single Pokemon by name
export const GET_POKEMON_DETAILS = gql`
  query getPokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      abilities {
        ability {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }
`;

// Fetch detailed Pokemon data using Apollo Client
export const fetchPokemonDetails = async (
  name: string
): Promise<PokemonDetail> => {
  const { data } = await client.query({
    query: GET_POKEMON_DETAILS,
    variables: { name },
  });

  return data.pokemon;
};
