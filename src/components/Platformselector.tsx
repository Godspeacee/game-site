import usePlatform from "@/Hooks/usePlatform";
import usePlatforms from "@/Hooks/usePlatforms";
import useGameQueryStore from "@/Zustandstores/GameQuerystore";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Collapsible,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";

const Platformselector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatform = useGameQueryStore((s) => s.setPlatformId);
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  return (
    <Collapsible.Root>
      <Collapsible.Trigger asChild>
        <Button variant={"surface"}>
          {selectedPlatform?.name || "Platforms"} <FaAngleDown />
        </Button>
      </Collapsible.Trigger>

      <Collapsible.Content
        maxW="sm"
        borderWidth="1px"
        overflow-wrap={"none"}
        position={"absolute"}
      >
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatform(platform.id)}
            value={platform.slug}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default Platformselector;
