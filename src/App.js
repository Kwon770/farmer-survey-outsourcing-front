import React from "react";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import reset from 'styled-reset';
import Theme from "./styles/Theme"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import OldSector1 from "./pages/OldSector1";
import OldSector2 from "./pages/OldSector2";
import OldSector3 from "./pages/OldSector3";
import OldSector4 from "./pages/OldSector4";
import OldSector5 from "./pages/OldSector5";
import Sector1 from "./pages/Sector1";
import Sector2 from "./pages/Sector2";
import Sector3 from "./pages/Sector3";
import Sector4 from "./pages/Sector4";
import Submit from "./pages/Submit";
import SectorLocal from "./pages/SectorLocal";
import SectorServer from "./pages/SectorServer";

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/old" element={<OldSector1/>} />
            <Route path="/old2" element={<OldSector2/>} />
            <Route path="/old3" element={<OldSector3/>} />
            <Route path="/old4" element={<OldSector4/>} />
            <Route path="/old5" element={<OldSector5/>} />

            <Route path="/" element={<Sector1/>} />
            <Route path="/2" element={<Sector2/>} />
            <Route path="/3" element={<Sector3/>} />
            <Route path="/4" element={<Sector4/>} />
            <Route path="/submit" element={<Submit/>} />

            <Route path="/local" element={<SectorLocal/>} />
            <Route path="/server" element={<SectorServer/>} />
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
    color: ${Theme.fontHighlightColor};
    font-weight: bold;
  }

  em {
    text-decoration: underline;
    font-weight: bold;
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
