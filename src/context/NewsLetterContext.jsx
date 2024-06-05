import React from "react";

export const NewsLetterContext = React.createContext();

const NewsLetterProvider = ({ children }) => {
    const dataCollectText="Prihvaćam prikupljanje, obradu i zloupotrebu osobnih podataka danih u obrascu bez kojih moj zahtjev ne može biti ispunjen."
    const acceptText="Prijavi me na newsletter"

    return (
        <NewsLetterContext.Provider value={{ dataCollectText, acceptText }}>
            {children}
        </NewsLetterContext.Provider>
    );
};

export { NewsLetterProvider };