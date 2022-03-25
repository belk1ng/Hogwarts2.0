import axios from "axios";

export const api = axios.create({
    baseURL: "http://hp-api.herokuapp.com/api/characters/house/",
});

export const getCharacters = async (path, setCharacters, setError) => {
    // GET all characters of the certain house
    await api
        .get(path)
        .then((response) => setCharacters(response.data))
        .catch((err) => {
            setCharacters(false);
            setError(err.toString());
        });
};

export const getCharacter = async (
    house,
    id,
    setCharacter,
    setIsLoading,
    setError
) => {
    // GET certain character
    await api
        .get(house)
        .then((response) => {
            setCharacter(response.data[id - 1]);
            setIsLoading(false);
        })
        .catch((err) => {
            setCharacter(false);
            setError(err.toString());
        })
        .finally(() => setIsLoading(false));
};
