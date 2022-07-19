import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperMovieInfo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    margin-left: 8px;
    
    h1 {
        font-size: 32px;
        font-weight: bold;
        margin-top: 10px;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
    }
`;

export const WrapperStatus = styled.div`
    div {
        display: flex;
        align-items: center;
    }
    h3 {
        margin-right: 10px;
    }
`;

export const WrapperTitle = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    h3 {
        margin-right: 10px;
        text-align: center;
    }
`;

export const WrapperImage = styled.img`
    width: 300px;
    margin: 8px;
`;