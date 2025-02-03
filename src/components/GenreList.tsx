import useGenres, { Genre } from "@/Hooks/useGenres";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        {" "}
        Genres
      </Heading>
      <ul>
        {data.map((genre) => (
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
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
