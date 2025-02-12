import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import placeholderImage from "../assets/placeholder.webp"; // Import placeholdera

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  // Sprawdzenie, czy gra ma dostępne zrzuty ekranu
  const imageUrl =
    game.screenshots && game.screenshots.length > 0
      ? `https:${game.screenshots[0].url.replace(
          "t_thumb",
          "t_screenshot_med_2x"
        )}`
      : placeholderImage; // Jeśli brak, użyj placeholdera

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={imageUrl} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
