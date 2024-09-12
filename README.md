This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Demo
https://tech-challenge-4cfm.vercel.app/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

1. **Username and Job Title Requirement**: To view the content, you must enter your username and job title. The app will prompt for this information if it’s missing.
2. **Local Storage for User Data**: The entered username and job title are stored in your browser’s local storage, allowing them to persist between sessions.
3. **View the Pokédex with Pagination**: The application includes a Pokédex feature where users can view Pokémon data with pagination, making it easier to browse through a large list of Pokémon.
4. **Pokédex API**: The app uses the GraphQL PokéAPI from https://graphql-pokeapi.vercel.app/ to fetch Pokémon data, ensuring up-to-date information.
5. **Accessibility and Responsiveness**: The web application is designed to be accessible and user-friendly, featuring responsive design that adapts to different screen sizes and is optimized for users with varying accessibility needs.

## Future Work

1. **Unit Tests**: Implementing unit tests to ensure the application functions as expected and is maintainable.
2. **Search Pokémon Feature**: Adding a search feature to allow users to easily find a specific Pokémon by name or type within the Pokédex.
