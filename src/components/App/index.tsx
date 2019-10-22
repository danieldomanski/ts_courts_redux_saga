import React from "react";
import Header from "../Header";
import Router from "../Router";
import "../../styles/App.css";

const App: React.FC = () => {
  return (
    <div className="app__container">
      <Header></Header>
      <main className="app__main">
        <Router />
      </main>
    </div>
  );
};

export default App;
