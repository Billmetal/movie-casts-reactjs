import { useContext } from "react";
import { ImdbContext } from "../providers/imdb-provider";

const useImdb = () => { 
    const { imdbState, getMovie, getTrailer, getSearch } = useContext(ImdbContext);

    return { imdbState, getMovie, getTrailer, getSearch };
};

export default useImdb;