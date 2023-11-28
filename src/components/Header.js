import styled from "styled-components";

const StyledHeader = styled.div`
  width: 632px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 52px;
  padding: 120px 0;
  
  @media (max-width: 810px) {
    width: 100%;
    padding: 120px 16px;
  }
`

const HeaderImage = styled.div`
  -webkit-user-select: none;
  width: 100%;
  height: 390px;
  border-radius: 16px;
  background: no-repeat url("/images/header.jpg");
  background-size: cover;
  background-position: center 50%;
  
  @media (max-width: 810px) {
    aspect-ratio: 1.7777777777777777 / 1;
    height: auto;
  }
`

const HeaderTitle = styled.h1`
  text-align: center;
  
  @media (max-width: 810px) {
    font-size: 34px;
  }
`

const HeaderParagraph = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

const HeaderNumbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 124px;
  
  @media (max-width: 810px) {
    flex-direction: column;
    margin-bottom: 50px;
    gap: 50px;
  }
`

const HeaderNumber = styled.div`
  text-align: center;
  
  & > h1 {
    font-size: 64px;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <HeaderTitle data-aos="fade-up">I'm Francesco Ghiggi</HeaderTitle>
      <HeaderImage data-aos="flip-left" data-aos-delay="300" />

      <HeaderParagraph data-aos="fade-up" data-aos-delay="300">
        <h2>"In the vast market symphony, I compose success notes, turning clicks into a digital crescendo."</h2>
        <p>I'm Francesco Ghiggi, originally from Mese (SO), and now a resident of Lugano. Over the past year, I've been deeply involved in successful dropshipping ventures, prominently with Genshin Accounts Bay at <a style={{fontSize: "18px"}} href="https://genshinaccountsbay.com">genshinaccountsbay.com</a>. Recognized for my commitment, professionalism, and loyalty, I invite you to explore my diverse projects. Whether for collaboration or inquiries, feel free to reach out. I look forward to sharing more about my digital journey with you.</p>
      </HeaderParagraph>

      <HeaderNumbers>
        <HeaderNumber data-aos="fade-up" data-aos-delay="400">
          <h1>2</h1>
          <span>Experience Years</span>
        </HeaderNumber>

        <HeaderNumber data-aos="fade-up" data-aos-delay="500">
          <h1>99+</h1>
          <span>Happy Clients</span>
        </HeaderNumber>

        <HeaderNumber data-aos="fade-up" data-aos-delay="600">
          <h1>4</h1>
          <span>Websites</span>
        </HeaderNumber>
      </HeaderNumbers>
    </StyledHeader>
  );
};

export default Header;