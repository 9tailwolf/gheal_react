import React from "react";
import styled from "styled-components";
import flower from "./img/flower.png";

const Title = styled.div`
color: green;
position: absolute;
width: 234px;
height: 160px;
left: calc(50% - 234px / 2 - 501px);
top: 55px;

font-family: "Italianno";
font-style: normal;
font-weight: 400;
font-size: 110px;
line-height: 160px;
`;

const Menu = styled.div`
position: absolute;
  width: 436px;
  height: 56px;
  left: calc(50% - 436px / 2 + 615px);
  top: 140px;

  font-family: "Martel";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 51px;
`;

const Line = styled.div`
  position: absolute;
  width: 1400px;
  height: 0px;
  left: calc(50% - 1400px / 2 + 19.99px);
  top: 200.94px;

  border: 2px solid #000000;
`;

const Chat = styled.div`
  position: absolute;
  width: 704px;
  height: 100px;
  left: calc(50% - 704px / 2 - 288px);
  top: 270px;

  font-family: "Martel";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 90px;

  color: #000000;
`;

const Greenbox = styled.div`
  position: absolute;
  width: 1286px;
  height: 360px;
  left: calc(50% - 1286px / 2 - 10px);
  top: 400px;

  background: rgba(172, 216, 203, 0.3);
  border-radius: 20px;
`;

const Image2 = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: calc(50% - 347px / 2 - 437.5px);
  top: 417px;
  border-radius: 15px;
`;

const Ctalk = styled.div`
  position: absolute;
  width: 700px;
  height: 218px;
  left: calc(50% - 805px / 2 + 291.5px);
  top: 400px;

  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 33px;
  text-align: center;
`;

const Button1 = styled.button`
  box-sizing: border-box;

  position: absolute;
  width: 300px;
  height: 50px;
  left: calc(50% - 300px / 2 + 71.5px);
  top: 690px;

  background: rgba(94, 88, 88, 0.33);
  border: 1px solid #000000;
  border-radius: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;
const Button2 = styled.button`
  box-sizing: border-box;

  position: absolute;
  width: 300px;
  height: 50px;
  left: calc(50% - 300px / 2 + 391.5px);
  top: 690px;

  background: rgba(94, 88, 88, 0.33);
  border: 1px solid #000000;
  border-radius: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;
export const Second = () => {
  return (
    <div>
      <Title>Gheal</Title>
      <Menu>About | Board | Detail</Menu>
      <Line> </Line>
      <Chat>Talk in Flower garden</Chat>
      <Greenbox></Greenbox>
      <Image2>
        <img src={flower} width="350" height="320" />
      </Image2>
      <Ctalk>
        <p>지우고 싶은 당신의 고민을 땅에 묻어주세요 </p>
        <p>당신의 모든 고민들은 익명으로 공개되며,</p>
        <p>다른 사람들의 따스한 손길들은 꽃을 피우는 양분이 됩니다.</p>
        <p>자신 또는 다른 유저들의 꽃밭으로 향하여</p>
        <p>고민을 함께 나누어보세요!</p>
      </Ctalk>
      <Button1>나의 꽃밭으로 가기</Button1>
      <Button2>다른 유저의 꽃밭으로 가기</Button2>
    </div>
  );
};

export default Second;