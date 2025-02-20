import usePlatforms, { Platform } from "@/Hooks/usePlatforms";
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
  selectedPlatformId?: number;
}

const Platformselector = ({ onselectplatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );
  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"surface"}>
          {selectedPlatform?.name || "Platforms"} <FaAngleDown />
        </Button>
      </MenuTrigger>
      <MenuContent maxW="sm" borderWidth="1px">
        {data?.results.map((platform) => (
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
