import React from "react";
import useImdb from "../../hooks/imdb-hooks";
import * as S from "./styled"

const MovieInfo = () => {
    const { imdbState } = useImdb();

    return (
        <S.Wrapper>
            <a href={`https://www.imdb.com/title/${imdbState.movie.id}/`}
                target="_blank" rel="noreferrer">
                <S.WrapperImage src={imdbState.movie.image} alt='Movie poster' />
            </a>    
            <S.WrapperMovieInfo>
                <div>
                    <h1>{imdbState.movie.title}</h1>
                    <S.WrapperTitle>
                        <h3>Descrição:</h3>
                        <span>{imdbState.movie.plot}</span>
                    </S.WrapperTitle>
                </div>
                <S.WrapperStatus>
                    <div>
                        <h3>Ano:</h3>
                        <span>{imdbState.movie.year}</span>
                    </div>
                    <div>
                        <h3>Duração:</h3>
                        <span>{imdbState.movie.runtimeStr}</span>
                    </div>
                    <div>
                        <h3>Gênero:</h3>
                        <span>{imdbState.movie.genres}</span>
                    </div>
                    <div>
                        <h3>Avaliação:</h3>
                        <span>{imdbState.movie.imDbRating}</span>
                    </div>
                    <div>
                        <h3>Diretores:</h3>
                        <span>{imdbState.movie.directors}</span>
                    </div>
                    <div>
                        <h3>Orçamento:</h3>
                        <span>{imdbState.movie.budget}</span>
                    </div>
                </S.WrapperStatus>
            </S.WrapperMovieInfo>
        </S.Wrapper>
    );
};

export default MovieInfo;