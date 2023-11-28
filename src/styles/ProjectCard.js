import styled from "styled-components";

const StyledCard = styled.a`
  -webkit-user-select: none;
  width: 290px;
  max-height: 290px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border-radius: 10px;
  text-decoration: none;
  line-height: normal;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 2px 0px, rgba(0, 0, 0, 0.25) 0px 4px 4px 0px, rgba(0, 0, 0, 0.25) 0px 8px 8px 0px, rgba(0, 0, 0, 0.25) 0px 16px 16px 0px, rgba(0, 0, 0, 0.25) 0px 32px 32px 0px;
  border: 1px solid #dbdbdb1f;
  
  &:hover {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.1);
  }
  
  & > img {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
`

const CardContent = styled.div`
  width: 100%;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  padding: 1.25rem;
`

const CardTitle = styled.h4`
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 5px;
`

const ProjectCard = ({link}) => {
  return (
    <StyledCard href={link}>
      <img height="165" width="290" src="/images/gamesbay.jpg" alt="" />
      <CardContent>
        <CardTitle>GamesBay</CardTitle>
        <span>A wonderful place where you can buy some gaming accounts.</span>
      </CardContent>
    </StyledCard>
  );
};

export default ProjectCard;