import {
  Box,
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Platformselector from "./components/Platformselector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
function App() {
  const isLg = useBreakpointValue({ base: false, lg: true });
  //const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show when={isLg}>
          <GridItem area={"aside"} paddingX={5}>
            {" "}
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area={"main"}>
          <Box paddingLeft={10}>
            <GameHeading />
            <HStack gap={10}>
              <Platformselector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
