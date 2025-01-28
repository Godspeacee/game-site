import { Card } from "@chakra-ui/react";

import { Skeleton, SkeletonText } from "./ui/skeleton";

const Gameskeletons = () => {
  return (
    <>
      <Card.Root width={300}>
        <Skeleton height={200} />
        <Card.Body>
          <SkeletonText />
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default Gameskeletons;
