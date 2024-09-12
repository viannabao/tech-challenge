// Basic Pokemon type (used in the paginated list)
export type BasicPokemon = {
    name: string;
    url: string;
    image: string;
  };
  
  // Paginated Pokemon response type
  export type PaginatedPokemon = {
    count: number; 
    next: string | null; 
    previous: string | null; 
    status: boolean; 
    message: string | null; 
    results: BasicPokemon[]; 
  };
  
  // Detailed Pokemon information type
  export type PokemonDetail = {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    }
    abilities: {
      ability: {
        name: string;
      };
    }[];
    types: {
      type: {
        name: string;
      };
    }[];
    status: boolean; 
    message: string | null; 
  };