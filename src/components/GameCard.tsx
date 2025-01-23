import { Game } from "@/Hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import Platformiconlist from "./Platformiconlist";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
        <Platformiconlist
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
