import {
  MenuRoot,
  MenuTrigger,
  Button,
  MenuContent,
  MenuItem,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"surface"}>
          Order by :Relevance <FaAngleDown />
        </Button>
      </MenuTrigger>
      <MenuContent maxW="sm" borderWidth="1px">
        <MenuItem value="1"> Relevance </MenuItem>
        <MenuItem value="2"> Date added </MenuItem>
        <MenuItem value="3"> Name </MenuItem>
        <MenuItem value="4"> Release date </MenuItem>
        <MenuItem value="5"> Popularity </MenuItem>
        <MenuItem value="6"> Average rating </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
