import React from "react";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import reset from 'styled-reset';
import Theme from "./styles/Theme"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sector1 from "./pages/Sector1";
import Sector2 from "./pages/Sector2";
import Sector3 from "./pages/Sector3";
import Sector4 from "./pages/Sector4";
import Sector5 from "./pages/Sector5";
import Sector00 from "./pages/Sector00";

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Sector1/>} />
            <Route path="/2" element={<Sector2/>} />
            <Route path="/3" element={<Sector3/>} />
            <Route path="/4" element={<Sector4/>} />
            <Route path="/5" element={<Sector5/>} />
            <Route path="/00" element={<Sector00/>} />
        </Routes>
    </Router>
)

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 100;
    src: url("styles/fonts/NotoSansKR-Light.woff2") format('woff2'),
    url("styles/fonts/NotoSansKR-Light.woff") format('woff'),
    url("styles/fonts/NotoSansKR-Light.otf") format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: normal;
    src: url("styles/fonts/NotoSansKR-Regular.woff2") format('woff2'),
    url("styles/fonts/NotoSansKR-Regular.woff") format('woff'),
    url("styles/fonts/NotoSansKR-Regular.otf") format('truetype');
  }


  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: url("styles/fonts/NotoSansKR-Medium.woff2") format('woff2'),
    url("styles/fonts/NotoSansKR-Medium.woff") format('woff'),
    url("styles/fonts/NotoSansKR-Medium.otf") format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: bold;
    src: url("styles/fonts/NotoSansKR-Bold.woff2") format('woff2'),
    url("styles/fonts/NotoSansKR-Bold.woff") format('woff'),
    url("styles/fonts/NotoSansKR-Bold.otf") format('truetype');
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${Theme.bodyColor};
  }
  
  #root {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  * {
    font-family: 'Noto Sans KR', AppleGothic, sans-serif;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  strong {
    color: ${Theme.fontHighlightColor}
  }

  em {
    text-decoration: underline;
  }
  
  i {
    color: ${Theme.placeholderColor};
  }
`

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle/>
            <AppRouter/>
        </ThemeProvider>
    );
}

export default App;
