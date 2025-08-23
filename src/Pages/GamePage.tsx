import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import DfinitionItem from "../components/DfinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttribute from "../components/GameAttribute";

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
    </>
  );
};

export default GamePage;
