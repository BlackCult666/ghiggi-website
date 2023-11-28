import styled from "styled-components";

const StyledContact = styled.div`
  width: 632px;
  position: relative;
  margin-top: 80px;
  padding-bottom: 80px;
  
  @media (max-width: 810px) {
    width: 100%;
    padding: 0 16px 80px 16px;
  }
`

const ContactParagraph = styled.p`
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 70px;
`

const ContactInfos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 40px;
  margin-bottom: 50px;
  
  @media (max-width: 810px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    margin-bottom: 50px;
  }
`

const ContactInfo = styled.div`
  text-align: center;
  
  & > h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    letter-spacing: normal;
    font-size: 16px;
  }
`

const SeparatorText = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #dbdbdb;
  font-size: 14px;
  margin: 8px 0;
  
  &:before, &:after {
    content: "";
    flex-grow: 1;
    background: #dbdbdb1f;
    height: 1px;
    font-size: 0;
    line-height: 0;
    margin: 0 16px;
  }
`

const EmailButton = styled.a`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  text-decoration: none;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  padding: 14px 32px 16px;
  border: 2px solid #dbdbdb1f;
  border-radius: 100px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    font-weight: 500;
    background-color: #dbdbdb;
    color: #0d0d0d;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
`




const Contact = () => {
  return (
    <StyledContact data-aos="fade-up" data-aos-delay="300">
      <h2>A Peek Into Professional Details</h2>
      <br></br>
      <ContactParagraph>Explore the vital facets of my professional identity below. This dedicated space is a hub for key details, providing a comprehensive overview of my contact information, including address, email, VAT number, and phone. Delve into these essential credentials to gain a deeper insight into my professional presence.</ContactParagraph>

      <ContactInfos>
        <ContactInfo>
          <h1>IT01073100149</h1>
          <span>VAT Number</span>
        </ContactInfo>

        <ContactInfo>
          <h1>Via Roma 7/b, 23020 Mese (SO)</h1>
          <span>Address</span>
        </ContactInfo>

        <ContactInfo>
          <h1>ghiggifra.priv@gmail.com</h1>
          <span>Email</span>
        </ContactInfo>

        <ContactInfo>
          <h1>+39 3662560727</h1>
          <span>Phone Number</span>
        </ContactInfo>
      </ContactInfos>

      <SeparatorText style={{marginBottom: "40px"}}>or directly</SeparatorText>
      <EmailButton href="mailto:ghiggifra.priv@gmail.com">Drop an E-Mail</EmailButton>

      <br></br>
    </StyledContact>
  );
};

export default Contact;