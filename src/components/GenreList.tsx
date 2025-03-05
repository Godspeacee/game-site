import useGenres from "@/Hooks/useGenres";
import useGameQueryStore from "@/Zustandstores/GameQuerystore";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Spinner,
} from "@chakra-ui/react";

const GenreList = () => {
  const seletedGenrieId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        {" "}
        Genres
      </Heading>
      <ul>
        {data?.results.map((genre) => (
          <Box key={genre.id} paddingY={5}>
            <HStack gap={-2}>
              <Image
                boxSize={10}
                borderRadius={4}
                objectFit={"cover"}
                src={genre.image_background}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === seletedGenrieId ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
                variant={"plain"}
              >
                <Link colorPalette={"pink"}>{genre.name}</Link>
              </Button>
            </HStack>
          </Box>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
