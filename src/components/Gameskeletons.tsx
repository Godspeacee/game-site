import { CardBody, CardRoot } from "@chakra-ui/react";

import { Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const GameSkeletons = () => {
  return (
    <>
      <CardRoot width={300}>
        <Skeleton height={200} bg="gray.300" />
        <CardBody>
          <SkeletonText noOfLines={2} />
        </CardBody>
      </CardRoot>
    </>
  );
};

export default GameSkeletons;
