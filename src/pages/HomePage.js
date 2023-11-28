import {Fragment} from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/Header";
import ProjectCards from "../components/ProjectCards";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <Fragment>
      <GlobalStyle />

      <Header />
      <ProjectCards />
      <Contact />
    </Fragment>
  );
}

export default HomePage;
