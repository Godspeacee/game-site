import useGameQueryStore from "@/Zustandstores/GameQuerystore";
import {
  MenuRoot,
  MenuTrigger,
  Button,
  MenuContent,
  MenuItem,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";

const seletedOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
const setSelectedOrder = useGameQueryStore((s) => s.setSortOrder);

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === seletedOrder
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"surface"}>
          Order by :{currentSortOrder?.label || "Relevance"} <FaAngleDown />
        </Button>
      </MenuTrigger>
      <MenuContent maxW="sm" borderWidth="1px">
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSelectedOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
