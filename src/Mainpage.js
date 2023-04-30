import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import chat from "./img/chat.png";
import flower from "./img/flower.png";
import music from "./img/music.png";
import Subtitle1 from "./subtitle1";
import ImageButton from  "./ImageButton";



const Title = styled.div`
  color: green;
  position: absolute;
  width: 234px;
  height: 160px;
  left: calc(50% - 234px / 2 - 571px);
  top: 55px;

  font-family: "Italianno";
  font-style: normal;
  font-weight: 400;
  font-size: 90px;
  line-height: 160px;
`;

const Menu = styled.div`
  position: absolute;
  width: 436px;
  height: 56px;
  left: calc(50% - 436px / 2 + 415px);
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

const Greenbox1 = styled.div`
  position: absolute;
  width: 415px;
  height: 570px;
  left: calc(50% - 415px / 2 - 480.99px);
  top: 280px;

  background: rgba(172, 216, 203, 0.5);
  border-radius: 10px;
`;
const Image1 = styled.div`
  position: absolute;
  width: 350px;
  height: 600px;
  left: calc(50% - 350px / 2 - 480.5px);
  top: 320px;
  border-radius: 15px;
`;
const Chat = styled.div`
  position: absolute;
  width: 349px;
  height: 51px;
  left: calc(50% - 349px / 2 - 455.99px);
  top: 600px;

  font-family: "Martel";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 51px;
  /* identical to box height */

  color: #000000;
`;
const Chatsub = styled.div`
  position: absolute;
  width: 316px;
  height: 144px;
  left: calc(50% - 316px / 2 - 480.99px);
  top: 684px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 100;
  font-size: 23px;
  line-height: 36px;
  text-align: center;

  color: #000000;
`;
const Greenbox2 = styled.div`
  position: absolute;
  width: 415px;
  height: 570px;
  left: calc(50% - 415px / 2 - 10.09px);
  top: 280px;

  background: rgba(172, 216, 203, 0.5);
  border-radius: 10px;
`;
const Image2 = styled.div`
  position: absolute;
  width: 100px;
  height: 200px;
  left: calc(50% - 100px / 2 - 135.09px);
  top: 320px;

  background: url(image.png);
  border-radius: 20px;
`;
const Garden = styled.div`
  position: absolute;
  width: 335px;
  height: 51px;
  left: calc(50% - 100px / 2 - 100.09px);
  top: 600px;

  font-family: "Martel";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 51px;
`;
const Gardensub = styled.div`
  position: absolute;
  width: 367px;
  height: 180px;
  left: calc(50% - 100px / 2 - 145.09px);
  top: 680px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 100;
  font-size: 23px;
  line-height: 36px;
  text-align: center;

  color: #000000;
`;
const Greenbox3 = styled.div`
  position: absolute;
  width: 415px;
  height: 570px;
  left: calc(50% - 415px / 2 + 460.09px);
  top: 280px;

  background: rgba(172, 216, 203, 0.5);
  border-radius: 10px;
`;
const Image3 = styled.div`
  position: absolute;
  width: 381px;
  height: 415px;
  left: calc(50% - 381px / 2 + 476.09px);
  top: 316px;

  background: url(image.png);
  border-radius: 15px;
`;
const Player = styled.div`
  position: absolute;
  width: 325px;
  height: 51px;
  left: calc(50% - 325px / 2 + 480.99px);
  top: 600px;

  font-family: "Martel";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 51px;
`;
const Playersub = styled.div`
  position: absolute;
  width: 378px;
  height: 108px;
  left: calc(50% - 378px / 2 + 460.99px);
  top: 680px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 100;
  font-size: 23px;
  line-height: 36px;
  text-align: center;

  color: #000000;
`;


 
function Mainpage() {
  function handleClick() {
    return (
      <Routes>
        <Route path="/subtitle1" element={<Subtitle1 />}/>
      </Routes>
    );

  }
  return (
    <><div className="Mainpage">
      <Title>Gheal</Title>
      <Menu>About | Board | Detail</Menu>
      <Line> </Line>
      <Greenbox1></Greenbox1>
      <ImageButton
        imageSrc="Image1"
        imageAlt="Image description"
        onClick={handleClick}
      />
      <Chat>Chat with AI Therapist</Chat>
      <Chatsub>
        마음 속 걱정과 고민을 Therapist에게 털어놓아보세요! 당신의 아픔을 치유해
        드립니다
      </Chatsub>
      <Greenbox2></Greenbox2>
      <Image2>
        <img src={flower} width="350" />
      </Image2>
      <Garden>Talk in flower Garden</Garden>
      <Gardensub>
        지우고 싶은 고민을 땅에 묻어주세요 당신의 고민과 근심,그리고 익명의
        따스한 손길들은 꽃을 피우는 양분이 됩니다
      </Gardensub>
      <Greenbox3></Greenbox3>
      <Image3>
        <img src={music} width="350" />
      </Image3>
      <Player>Rest with Cozy Player</Player>
      <Playersub>
        오늘 하루를 바쁘게 보낸 당신, 편안한 음악 또는 영상과 함께 따뜻한
        마무리를 하는 것은 어떨까요?
      </Playersub>
    

    <nav>
    <Link to="/">Home</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Subtitle1 />} />
    </Routes>
    </div>
  
    </>
   
  );
}

export default Mainpage;
