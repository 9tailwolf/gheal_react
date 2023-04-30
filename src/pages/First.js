import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import chat from "./img/chat.png";

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
const Image1 = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: calc(50% - 347px / 2 - 437.5px);
  top: 420px;
  border-radius: 15px;
`;
const Ctalk = styled.div`
  position: absolute;
  width: 700px;
  height: 218px;
  left: calc(50% - 805px / 2 + 191.5px);
  top: 400px;

  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 43px;
  text-align: center;
`;

const Button1 = styled.button`
  box-sizing: border-box;

  position: absolute;
  width: 300px;
  height: 50px;
  left: calc(50% - 374px / 2 + 196px);
  top: 670px;

  background: rgba(94, 88, 88, 0.33);
  border: 1px solid #000000;
  border-radius: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;
export const First = () => {
  return (
    <div>
      <Title>Gheal</Title>
      <Menu>About | Board | Detail</Menu>
      <Line> </Line>
      <Chat>Chat with AI Therapist</Chat>
      <Greenbox></Greenbox>
      <Image1>
        <img src={chat} width="350" height="320" />
      </Image1>

      <Ctalk>
        <p>아무에게도 쉽게 털어놓지 못했던 </p>
        <p>자신만의 고민거리들을 말해주세요!</p>
        <p>때로는 누군가 들어주는 것만으로도 큰 도움이 됩니다.</p>
        <p>대화창을 통해 Therapist와 대화를 시작해보세요!</p>
      </Ctalk>
      <Button1>대화 시작하기!</Button1>
    </div>
  );
};

export default First;
