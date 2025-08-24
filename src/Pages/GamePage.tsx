import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import DfinitionItem from "../components/DfinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttribute from "../components/GameAttribute";
import useGameTrailer from "../hooks/useGameTrailer";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GamePage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttribute game={game} />
      <GameTrailer slug={slug!} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GamePage;
