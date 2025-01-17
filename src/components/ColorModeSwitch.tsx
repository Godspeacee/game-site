import { HStack, Show, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@/components/ui/switch";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorPalette={"teal"}
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Show when={colorMode === "dark"}>
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </Show>
    </HStack>
  );
};

export default ColorModeSwitch;
