import React from "react";
import useImdb from "../../hooks/imdb-hooks";
import * as S from "./styled";

const Search = () => { 
    const { imdbState, getMovie } = useImdb();

    const selectMovie = (movieId) => { 
        getMovie(movieId);
    };

    return (
        <S.WrapperList>
            {imdbState.search.map((item,index) => (
                <S.Wrapper key={index}>
                    <img src={item.image} alt="Imagem do filme" onClick={selectMovie(item.id)}/>
                    <S.WrapperTexts>
                        <S.WrapperTitle>{item.title}</S.WrapperTitle>
                        <S.WrapperCharacter>Descrição:</S.WrapperCharacter>
                        <h3>{item.description}</h3>
                    </S.WrapperTexts>
                </S.Wrapper>
            ))}
        </S.WrapperList>
    );
};

export default Search;