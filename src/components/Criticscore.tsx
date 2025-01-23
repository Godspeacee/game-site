import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const Criticscore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorPalette={color} fontSize={14} paddingX={2}>
      {score}
    </Badge>
  );
};

export default Criticscore;
