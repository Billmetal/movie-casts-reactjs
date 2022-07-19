import React, { useEffect, useState } from "react";
import useImdb from "../../hooks/imdb-hooks";
import CastsItem from "../casts-item";
import NoSearch from "../no-search";
import Trailers from "../trailers";
import * as S from "./styled";

const Casts = () => { 
    const { imdbState, getTrailer } = useImdb();
    const [hasMovieCasts, setHasMovieCasts] = useState(false);

    useEffect(() => {
        if (imdbState.cast) {
            setHasMovieCasts(true);
            getTrailer(imdbState.movie.id);
        }
    },[imdbState.cast]);

    return (
        <>
            {hasMovieCasts ? (
                <S.WrapperTabs selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected">
                    <S.WrapperTabList >
                        <S.WrapperTab>Elenco Completo</S.WrapperTab>
                        <S.WrapperTab>Trailers</S.WrapperTab>
                    </S.WrapperTabList>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {imdbState.cast.map((item) => (
                                <CastsItem key={item.id} name={item.name} linkToSite={`https://www.imdb.com/name/${item.id}`} character={item.asCharacter} img={item.image} />
                            ))}
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        <S.WrapperList>
                            {imdbState.hasTrailer ? (
                                <Trailers title={imdbState.trailers.fullTitle} linkToSite={imdbState.trailers.link} description={imdbState.trailers.videoDescription} thumb={imdbState.trailers.thumbnailUrl} embed={imdbState.trailers.linkEmbed} />
                            ) : (
                                    <NoSearch alt={true} />
                            ) }
                        </S.WrapperList>
                    </S.WrapperTabPanel>
                </S.WrapperTabs>
            ) : (
                    <>
          
                    </>
            )}
        </>
    );
};

export default Casts;