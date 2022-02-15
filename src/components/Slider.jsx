import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction == "left" && "10px"};
  right: ${(props) => props.direction == "right" && "10px"};
  margin: auto;

  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;

  background-color: #${props => props.bg};
`;

const Image = styled.img`
  height: 80%;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="cfafaf">
          <ImgContainer>
            <Image src="data:image/jpeg;base64,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" />
          </ImgContainer>
          <InfoContainer>
              <Title>SUMMER SALE</Title>
              <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
              <Button>SHOW MORE</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="fbf0f4">
          <ImgContainer>
            <Image src="data:image/jpeg;base64,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" />
          </ImgContainer>
          <InfoContainer>
              <Title>POPULAR SALE</Title>
              <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
              <Button>SHOW MORE</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="fcfled">
          <ImgContainer>
            <Image src="data:image/jpeg;base64,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" />
          </ImgContainer>
          <InfoContainer>
              <Title>TRAVELLERS  SALE</Title>
              <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
              <Button>SHOW MORE</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;