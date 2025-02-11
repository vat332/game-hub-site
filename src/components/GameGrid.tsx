import { Text, Spinner, Box, Image } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error, loading } = useGames();
  return (
    <Box>
      {loading && <Spinner />}
      {error && <Text color="red.500">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name}
            {game.screenshots &&
              game.screenshots.map((screenshot) => (
                <Box key={screenshot.id}>
                  <Image
                    src={`https:${screenshot.url.replace(
                      "t_thumb",
                      "t_screenshot_med_2x"
                    )}`} // Wysoka jakość obrazu
                    alt={`Screenshot of ${game.name}`}
                    width="40%"
                  />
                </Box>
              ))}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default GameGrid;
