import { Input, InputElement } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => (
  <>
    <InputGroup>
      <InputElement children={<BsSearch />} />
    </InputGroup>
    <Input
      paddingLeft={5}
      borderRadius={20}
      placeholder="Search games..."
      variant={"outline"}
    />
  </>
);

export default SearchInput;
