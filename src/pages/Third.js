import React from "react";
import styled from "styled-components";
import music from "./img/music.png";
import { Link } from "react-router-dom";

const Background = styled.div`
  position: absolute;
  width: 1512px;
  height: 982px;

  background: #ffffff;
`;

const Logo = styled.div`
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

const Line2 = styled.div`
  position: absolute;
  width: 1400px;
  height: 0px;
  left: calc(50% - 1400px / 2 + 19.99px);
  top: 200.94px;

  border: 2px solid #000000;
`;

const About = styled.div`
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

const Rest = styled.div`
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

const Rectangle15 = styled.div`
  position: absolute;
  width: 1286px;
  height: 360px;
  left: calc(50% - 1286px / 2 - 10px);
  top: 400px;

  background: rgba(172, 216, 203, 0.3);
  border-radius: 20px;
`;
const Image3 = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: calc(50% - 347px / 2 - 437.5px);
  top: 417px;
  border-radius: 15px;
`;

const Todayis = styled.div`
  position: absolute;
  width: 700px;
  height: 218px;
  left: calc(50% - 805px / 2 + 251.5px);
  top: 420px;

  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 33px;
  text-align: center;
`;

const Rectangle17 = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 300px;
  height: 50px;
  left: calc(50% - 300px / 2 + 201.5px);
  top: 690px;

  background: rgba(94, 88, 88, 0.33);
  border: 1px solid #000000;
  border-radius: 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`;

export const Third = () => {
  return (
    <div>
      <Background></Background>
      <Logo> Gheal </Logo>
      <Line2></Line2>
      <About>About | Board | Detail</About>
      <Rest>Rest with Cozy player</Rest>
      <Rectangle15></Rectangle15>
      <Image3>
        <img src={music} width="350" height="320" />
      </Image3>
      <Todayis>
        <p>오늘도 좋은 하루가 되셨나요?</p>
        <p>알찬 하루를 보내느라 수고하셨습니다!</p>
        <p>당신을 위해 준비한 추천 음악과 영상입니다.</p>
        <p>준비된 음악 또는 영상과 함께 편안한 밤 되세요.</p>
      </Todayis>

      <Rectangle17> <Link to="Movie">추천 Playlist 확인하기 </Link> </Rectangle17>
    </div>
  );
};

export default Third;