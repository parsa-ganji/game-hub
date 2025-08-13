import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
      const { data: platforms } = usePlatforms();

      return platforms?.results.find((value) => value.id === id)?.name
}

export default usePlatform; 