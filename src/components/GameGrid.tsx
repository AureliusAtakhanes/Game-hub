import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardConteiner from "./GameCardConteiner";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}


const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding='10px'
                spacing={3}
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardConteiner key={skeleton}>
                            <GameSkeleton />
                        </GameCardConteiner>
                    ))
                }
                {data.map((game) => (
                    <GameCardConteiner key={game.id}>
                        <GameCard game={game} />
                    </GameCardConteiner>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
