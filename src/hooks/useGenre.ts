import useGenres from "./useGenres";

const useGenre = (id?: number) => {
    const { data: genres } = useGenres();

    return genres?.results.find((value) => value.id === id)?.name
}

export default useGenre;