import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "@/Zustandstores/GameQuerystore";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />} className="InputGroup">
        <Input
          ref={ref}
          paddingLeft={5}
          borderRadius={20}
          placeholder="Search games..."
          variant={"outline"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
