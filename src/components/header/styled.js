import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 24px;
        padding: 8px;
        font-weight: 500;
        margin: 8px 0;
    }

    button {
        background-color: #225ed8;
        padding: 0px 16px;
        margin: 8px 16px;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
        color: white;

        &:hover {
            background-color: #3556A7;
            box-shadow: 3px 2px 10px 1px #ccc;
        }
    }
`;