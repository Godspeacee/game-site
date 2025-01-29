import useGenres, { Genre } from "@/Hooks/useGenres";
import { Box, Button, HStack, Image, Link, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize={"lg"}
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
