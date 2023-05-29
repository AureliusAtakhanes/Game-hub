import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameSkeleton from "./GameSkeleton";
import GameCardConteiner from "./GameCardConteiner";


const GameGrid = () => {
    const { games, error, isLoading } = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                padding='10px'
                spacing={6}
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardConteiner key={skeleton}>
                            <GameSkeleton />
                        </GameCardConteiner>
                    ))
                }
                {games.map((game) => (
                    <GameCardConteiner>
                        <GameCard key={game.id} game={game} />
                    </GameCardConteiner>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
