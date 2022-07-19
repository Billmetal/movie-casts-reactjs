import React, { useState } from "react";
import * as S from "./styled";
import useImdb from "../../hooks/imdb-hooks";

const Header = () => {
    const { getSearch } = useImdb();
    const [nameForSearch, setNameForSearch] = useState();

    const submitGetMovie = () => { 
        if (!nameForSearch) {
            return;
        } else {
            return getSearch(nameForSearch);
        }
    };

    return (
        <header>
            <S.Wrapper>
                <input type="text" placeholder="Digite o filme que deseja buscar ..." onChange={(event) => setNameForSearch(event.target.value)}/>
                <button type="submit" onClick={submitGetMovie}>Buscar</button>
            </S.Wrapper>
        </header>
    );
};

export default Header;