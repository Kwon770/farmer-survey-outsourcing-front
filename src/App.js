import React from "react";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import reset from 'styled-reset';
import Theme from "./styles/Theme"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Sector1";

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
)

const GlobalStyle = createGlobalStyle`
  ${reset}
`

function App() {
  return (
      <ThemeProvider theme={Theme}>
          <GlobalStyle />
        <AppRouter/>
      </ThemeProvider>
  );
}

export default App;
