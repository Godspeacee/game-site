import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <HStack>
        <Button colorPalette={"green"}>Click me</Button>
        <Button variant="solid">Click me</Button>
      </HStack>
    </>
  );
}

export default App;
