import React from "react";
import * as S from "./styled"

const CastsItem = ({ name, linkToSite, character, img}) => {
    return (
        <S.Wrapper>
            <img src={img} alt="Imagem do ator" />
            <S.WrapperTexts>
                <S.WrapperTitle><a href={linkToSite} target="_blank" rel="noreferrer">{name}</a></S.WrapperTitle>
                <S.WrapperCharacter>Personagem:</S.WrapperCharacter>
                <h3>{character}</h3>
            </S.WrapperTexts>
        </S.Wrapper>
    );
 };

export default CastsItem;