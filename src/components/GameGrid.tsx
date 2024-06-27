import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkellton from "./GameCardSkellton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
interface Probs {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Probs) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, "2xl": 4 }}
      paddingY={10}
      spacing={6}
    >
      {isLoading &&
        skeletons.map((sk) => (
          <GameCardContainer key={sk}>
            <GameCardSkellton></GameCardSkellton>
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
