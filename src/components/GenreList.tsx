import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres()

    if (isLoading) return <Spinner />
    if (error) return null;

    return (
        <>
            <Heading marginBottom={3} fontSize='2xl'>Genres</Heading>
            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius={8}
                                objectFit='cover'
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                fontSize={'lg'}
                                variant='link'
                                onClick={() => onSelectedGenre(genre)}
                                fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                whiteSpace='normal'
                                textAlign='left'
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))
                }
            </List >
        </>
    )
}

export default GenreList
