import { Game } from "@/Hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import Platformiconlist from "./Platformiconlist";
import Criticscore from "./Criticscore";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <Card.Body>
        <HStack justifyContent={"space-between"}>
          <Platformiconlist
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Criticscore score={game.metacritic} />
        </HStack>
        <Card.Title fontSize={"2xl"}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
