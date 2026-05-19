import useGameQueryStore from "@/Zustandstores/GameQuerystore";
import {
  MenuRoot,
  MenuTrigger,
  Button,
  MenuContent,
  MenuItem,
  Collapsible,
  Text,
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
    (order) => order.value === seletedOrder,
  );

  return (
    <Collapsible.Root position={"relative"}>
      <Collapsible.Trigger asChild>
        <Button variant={"surface"}>
          Order by :{currentSortOrder?.label || "Relevance"} <FaAngleDown />
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content maxW="sm" borderWidth="1px" position={"absolute"}>
        {sortOrders.map((order) => (
          <Button
            onClick={() => setSelectedOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </Button>
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default SortSelector;
