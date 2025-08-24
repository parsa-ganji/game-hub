import React from "react";
import useGameTrailer from "../hooks/useGameTrailer";
import { Spinner } from "@chakra-ui/react";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data, isLoading, error } = useGameTrailer(slug);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0].preview}
      controls
    />
  );
};

export default GameTrailer;
