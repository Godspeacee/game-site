import useGames from "@/Hooks/useGames";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeletons from "./GameSkeletons";
import React from "react";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text> {error.message}</Text>;

  return (
    <Box padding={10}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={4}>
        {isLoading &&
          skeletons.map((skeleton) => <GameSkeletons key={skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading...." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
