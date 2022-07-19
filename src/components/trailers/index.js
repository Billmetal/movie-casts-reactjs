import React from "react";
import * as S from "./styled"

const Trailers = ({ title, linkToSite, description, thumb, embed}) => {
    return (
        <S.Wrapper>
            <a href={linkToSite} target="_blank" rel="noreferrer"><img src={thumb} alt="Thumbnail do trailer" /></a>
            <S.WrapperTexts>
                <S.WrapperTitle>{title}</S.WrapperTitle>
                <S.WrapperCharacter>Descrição do Video:</S.WrapperCharacter>
                <h3>{description}</h3>
            </S.WrapperTexts>
        </S.Wrapper>
    );
 };

export default Trailers;