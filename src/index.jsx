import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Navbar from "./components/Navbar";
import "./index.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "themes.js";
import StudyCase from "./components/StudyCase";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/works" element={<Works />}></Route>
            <Route path="/works/:clientname" element={<StudyCase />} />
          </Routes>
          <button onClick={() => themeToggler()}>Change Theme</button>
        </BrowserRouter>
      </StyledApp>
    </ThemeProvider>
  );
};

//activeStorage//

ReactDOM.render(<App />, document.getElementById("root"));