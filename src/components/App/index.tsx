import React from "react";
import Header from "../Header";
import "../../styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app__container">
      <Header></Header>
      <main className="app__main">
        <h1>Witaj w CourtListener API!</h1>
      </main>
    </div>
  );
};

export default App;
