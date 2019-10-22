import React from "react";
import { Provider } from "react-redux";
import Header from "../Header";
import Router from "../Router";
import configureStore from "../../configureStore";
import "../../styles/App.css";

const initialState = {};
const store = configureStore(initialState);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app__container">
        <Header></Header>
        <main className="app__main">
          <Router />
        </main>
      </div>
    </Provider>
  );
};

export default App;
