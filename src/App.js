import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Routes from "./Components/Routes/Routes";
import client from "./apolloClient";
import { gql, useQuery } from '@apollo/client';

import "./App.scss";

const GET_STATES = gql`
query GetStates {
  states {
    id
  }
}
`;

const App = () => {
  
  console.log(GET_STATES)
  const { loading, error, data } = useQuery(GET_STATES);
  return (
    <main className="App">
      <NavBar />
      <Routes />
      <Footer />
    </main>
  );
};

export default App;
