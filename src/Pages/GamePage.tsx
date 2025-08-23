import { Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";

const GamePage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
    </>
  );
};

export default GamePage;
