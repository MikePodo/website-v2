import React from "react";
import { AnimatePresence } from "framer-motion";
//Components
import BurgerMenu from "../components/BurgerMenu";
import Nav from "../components/Nav";
import ProjectsContent from "../components/ProjectsContent";
import ProjectsTitle from "../components/ProjectsTitle";

const Projects = ({ setBurgerMenu, burgerMenu, isDesktop }) => {
  return (
    <>
      <AnimatePresence>
        {burgerMenu ? <BurgerMenu setBurgerMenu={setBurgerMenu} /> : ""}
      </AnimatePresence>
      <Nav setBurgerMenu={setBurgerMenu} />
      <ProjectsTitle />
      <ProjectsContent isDesktop={isDesktop} />
    </>
  );
};

export default Projects;
