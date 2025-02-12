import { Text, Spinner, Box, Image, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error, loading } = useGames();
  return (
    <Box>
      {loading && <Spinner />}
      {error && <Text color="red.500">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
      >
        {games.map((game) => (
          <Box key={game.id}>
            <GameCard game={game} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
