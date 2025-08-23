import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CriticScore from "./CriticScore";
import DfinitionItem from "./DfinitionItem";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttribute = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DfinitionItem term="platform">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DfinitionItem>
      <DfinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DfinitionItem>
      <DfinitionItem term="Genre">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DfinitionItem>
      <DfinitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DfinitionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
