import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGernes";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit="cover"
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                <Text _hover={{ color: "gray.500" }}>{genre.name}</Text>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
