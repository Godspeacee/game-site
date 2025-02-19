import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
