import React from "react";
import App from "./App";
import ImdbProvider from "./providers/imdb-provider";

const Providers = () => { 
    return (
        <main>
            <ImdbProvider>
                <App />
            </ImdbProvider>
        </main>
    );
};

export default Providers;