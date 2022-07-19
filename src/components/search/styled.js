import styled from "styled-components";

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;

export const Wrapper = styled.div`
    display: flex;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 16px 16px;
    width: 400px;
    height: 200px;
    padding: 8px;
    /* align-content: center; */
    img {
        cursor: pointer;
    }
`;

export const WrapperTexts = styled.div`
    margin-left: 8px;
`;

export const WrapperTitle = styled.h2`
    font-size: 22px;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 50px;
`;

export const WrapperCharacter = styled.h4`
    font-size: 16px;
    font-weight: bold;
    color: #2d3748;
`;