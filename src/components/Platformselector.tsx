import usePlatforms from "@/Hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
const Platformselector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"surface"}>
          Platform <FaAngleDown />
        </Button>
      </MenuTrigger>
      <MenuContent boxSize={"60"}>
        {data.map((platform) => (
          <MenuItem value="data" key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default Platformselector;
