import React from "react";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/index.css";
import NavBar from "./NavBar";
import Headline from "./Headline";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <Headline></Headline>
      <AboutMe></AboutMe>
      <MyProjects></MyProjects>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
