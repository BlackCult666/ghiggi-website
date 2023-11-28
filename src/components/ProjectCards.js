import ProjectCard from "../styles/ProjectCard";
import styled from "styled-components";

const StyledProjects = styled.div`
  width: 632px;
  margin-top: -50px;
  margin-bottom: 50px;
  
  @media (max-width: 810px) {
    width: 100%;
    padding: 0 16px;
    
    & > h2 {
      font-size: 28px;
      text-align: center;
    }
  }
`

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  grid-row-gap: 40px;
  
  @media (max-width: 810px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`


const ProjectCards = () => {
  return (
    <StyledProjects data-aos="fade-up" data-aos-delay="400">
      <h2>Projects</h2>
      <br></br><br></br>

      <ProjectList>
        <ProjectCard link="https://genshinaccountsbay.com/" data-aos="fade-up" data-aos-delay="500" />
        <ProjectCard link="https://genshinaccountsbay.com/" data-aos="fade-up" data-aos-delay="600" />
        <ProjectCard link="https://genshinaccountsbay.com/" data-aos="fade-up" data-aos-delay="700" />
        <ProjectCard link="https://genshinaccountsbay.com/" data-aos="fade-up" data-aos-delay="800" />
      </ProjectList>
    </StyledProjects>
  );
};

export default ProjectCards;