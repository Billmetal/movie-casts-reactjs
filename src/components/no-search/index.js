import React from "react";
import * as S from "./styled";

const NoSearch = ({ alt }) => { 
    return (
        <S.Wrapper>
            {alt ? (
                <h1>Nenhum Trailer encontrado ...</h1>
            ) : (
                <h1> Nenhum filme pesquisado ou encontrado ...</h1>
            ) }
        </S.Wrapper>
    );
};

export default NoSearch;