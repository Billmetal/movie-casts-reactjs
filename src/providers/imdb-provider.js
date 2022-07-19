import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const ImdbContext = createContext({
    loading: false,
    hasMovie: false,
    hasTrailer: false,
    hasSearch: false,
    search: [],
    movie: {},
    cast: [],
    trailers: {}
});

const ImdbProvider = ({ children }) => {
    const [imdbState, setImdbState] = useState({
        loading: false,
        hasMovie: false,
        hasTrailer: false,
        hasSearch: false,
        search: [],
        movie: {
            id: "",
            title: "",
            image: "",
            year: "",
            runtimeStr: "",
            directors: "",
            plot: "",
            budget: "",
            imDbRating: "",
            companies: "",
            genres: ""
        },
        cast: [],
        trailers: {
            fullTitle: "",
            videoDescription: "",
            thumbnailUrl: "",
            link: "",
            linkEmbed: ""
        }
    });

    // `SearchMovie/k_w6mw46bj/${moviename}`
    // `Title/k_w6mw46bj/tt0107290/FullCast,`

    const getSearch = (moviename) => { 
        setImdbState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));
        api.get(`SearchMovie/k_w6mw46bj/${moviename}`).then(({data}) => {
            console.log(data);
            if (data.results.length === 1) {
                getMovie(data.results[0].id);
            } else { 
                setImdbState((prevState) => ({
                    ...prevState,
                    hasSearch: true,
                    search: data.results
                }));
            }
        }).catch(err => {
            console.log(err);
        }).finally(() => { 
            setImdbState((prevState) => ({
                ...prevState,
                loading: !prevState.loading
            }));
        });
    };

    const getMovie = (movieId) => { 
        setImdbState((prevState) => ({
            ...prevState,
            loading: !prevState.loading
        }));
        api.get(`Title/k_w6mw46bj/${movieId}/FullCast,`).then(({data}) => {
            console.log(data);
            setImdbState((prevState) => ({
                ...prevState,
                hasMovie: true,
                movie: {
                    id: data.id,
                    title: data.title,
                    image: data.image,
                    year: data.year,
                    runtimeStr: data.runtimeStr,
                    directors: data.directors,
                    plot: data.plot,
                    budget: data.boxOffice.budget,
                    imDbRating: data.imDbRating,
                    companies: data.companies,
                    genres: data.genres
                },
                cast: data.fullCast.actors,
            }));
        }).catch(err => {
            console.log(err);
        }).finally(() => { 
            setImdbState((prevState) => ({
                ...prevState,
                loading: !prevState.loading
            }));
        });
    };

    const getTrailer = (movieId) => { 
        api.get(`Trailer/k_w6mw46bj/${movieId}`).then(({data}) => {
            console.log(data);
            setImdbState((prevState) => ({
                ...prevState,
                hasTrailer: true,
                trailers: {
                    fullTitle: data.fullTitle,
                    videoDescription: data.videoDescription,
                    thumbnailUrl: data.thumbnailUrl,
                    link: data.link,
                    linkEmbed: data.linkEmbed
                }
            }));
        }).catch(err => {
            console.log(err);
        });
    };

    const contextValue = {
        imdbState,
        getMovie: useCallback((movieId) => getMovie(movieId), []),
        getTrailer: useCallback((movieId) => getTrailer(movieId), []),
        getSearch: useCallback((moviename) => getSearch(moviename),[])
    };

    return (
        <ImdbContext.Provider value={contextValue}>{children}</ImdbContext.Provider>
    );
 };

export default ImdbProvider;