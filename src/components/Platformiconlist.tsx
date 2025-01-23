import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendogamecube } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack } from "@chakra-ui/react";
import { Platform } from "@/Hooks/useGames";
import { IconType } from "react-icons";
import { Tooltip } from "@/components/ui/tooltip";

interface Props {
  platforms: Platform[];
}

const Platformiconlist = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendogamecube,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {
        platforms
          .map((platform) => {
            const IconComponent = iconMap[platform.slug];
            if (!IconComponent) return null; // Skip unsupported slugs
            return (
              <Tooltip
                key={platform.slug}
                aria-label={platform.slug}
                content={platform.slug}
              >
                <IconComponent color="gray" />
              </Tooltip>
            );
          })
          .filter(Boolean) /* Filters out null values */
      }
    </HStack>
  );
};

export default Platformiconlist;
