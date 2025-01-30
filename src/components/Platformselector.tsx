import { Platform } from "@/Hooks/useGames";
import usePlatforms from "@/Hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";

interface Props {
  onselectplatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const Platformselector = ({ onselectplatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"surface"}>
          {selectedPlatform?.name || "Platforms"} <FaAngleDown />
        </Button>
      </MenuTrigger>
      <MenuContent boxSize={"md"}>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onselectplatform(platform)}
            value={platform.slug}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default Platformselector;
