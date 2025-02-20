import { Card } from "@chakra-ui/react";

import { Skeleton } from "./ui/skeleton";
import { SkeletonText } from "./ui/skeleton";

const GameSkeletons = () => {
  return (
    <>
      <Card.Root width={300}>
        <Skeleton height={200} bg="gray.300" />
        <Card.Body>
          <SkeletonText noOfLines={2} />
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameSkeletons;
