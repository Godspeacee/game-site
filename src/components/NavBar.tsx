import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text> Navbar</Text>
      <Button variant="outline" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </HStack>
  );
};

export default NavBar;
