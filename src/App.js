import React from 'react';
import Casts from './components/casts';
import Layout from './components/layout';
import MovieInfo from './components/movie-info';
import NoSearch from './components/no-search';
import Search from './components/search';
import useImdb from './hooks/imdb-hooks';

const App = () => {
  const { imdbState } = useImdb();

  return (   
    <Layout>
      {imdbState.hasSearch ? (
        <>
          {imdbState.loading ?
            (<p>Loading ...</p>) :
            (<>
              <Search/>
            </>)}
        </>
      ): (
          <>
            {imdbState.hasMovie ? (
              <>
                {imdbState.loading ?
                  (<p>Loading ...</p>) :
                  (<>
                    <MovieInfo/>
                    <Casts />
                  </>)}
              </>
            ) : (
                <NoSearch alt={false} />
            )}
        </>  
      )}
    </Layout>
  );
};

export default App;
