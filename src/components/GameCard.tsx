import { Game } from "@/Hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import Platformiconlist from "./Platformiconlist";
import Criticscore from "./Criticscore";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <Card.Body>
        <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
        <HStack justifyContent={"space-between"}>
          <Platformiconlist
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Criticscore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
