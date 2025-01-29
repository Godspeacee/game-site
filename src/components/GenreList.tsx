import useGenres from "@/Hooks/useGenres";
import { Box, HStack, Image, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      <ul>
        {data.map((genre) => (
          <Box key={genre.id} paddingY={5}>
            <HStack>
              <Image
                boxSize={10}
                borderRadius={4}
                src={genre.image_background}
              />
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </Box>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
