import React from "react";
import styled from "styled-components";
import bed from "./img/bed.png";
import fox from "./img/fox.png";
import paint from "./img/paint.png";
 
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
  left: calc(50% - 347px / 2 - 510.5px);
  top: 280px;

  background: rgba(172, 216, 203, 0.5);
  border-radius: 75px;
`;
const Image1 = styled.div`
 
  position: absolute;
  width: 350px;
  height: 321px;
  left: calc(50% - 347px / 2 - 480.5px);
  top: 320px;
  border: 1px solid #FFFFFF;
  background: url(image.png);
  border-radius: 90px;
  overflow:hidden;
`;
const Chat = styled.div`
  position: absolute;
  width: 349px;
  height: 51px;
  left: 130px;
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
  left: calc(50% - 347px / 2 - 470.5px);
  top: 660px;

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
  left: calc(50% - 50px / 2 - 184.5px);
  top: 280px;

  background: rgba(172, 216, 203, 0.5);
  border-radius: 75px;
`;
const Image2 = styled.div`
  position: absolute;
  width: 350px;
  height: 321px;
  left: calc(50% - 50px / 2 - 150.5px);
  top: 320px;
  border: 1px solid #FFFFFF;
  background: url(image.png);
  border-radius: 90px;
  overflow:hidden;
`;
const Garden = styled.div`
  position: absolute;
  width: 335px;
  height: 51px;
  left: calc(50% - 50px / 2 - 150.5px);
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
  left: calc(50% - 50px / 2 - 150.5px);
  top: 660px;

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
  left: calc(61.5%);
  top: 280px;

  background: rgba(172, 216, 203, 0.5);
  border-radius: 75px;
`;
const Image3 = styled.div`
  position: absolute;
  width: 350px;
  height: 321px;
  left: calc(63% );
  top: 320px;
  border: 1px solid #FFFFFF;
  background: url(image.png);
  border-radius: 90px;
  overflow:hidden;
`;
const Player = styled.div`
  position: absolute;
  width: 325px;
  height: 51px;
  left: 1080px;
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
  left: calc(62.5% );
  top: 680px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 100;
  font-size: 23px;
  line-height: 36px;
  text-align: center;

  color: #000000;
`;
const Graybox = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 1512px;
  height: 925px;
  left: calc(50% - 1512px/2);
  top: 215px;

  background: rgba(60, 114, 34, 0.05);
  border: 1px solid #3C7222;
  border-radius: 40px;
`;
export const Third_music = () => {
  return (
    <div>
      <Graybox></Graybox>
      <Title>Gheal</Title>
      <Menu>[Rest with Cozy player]</Menu>
      <Line> </Line>
      <Greenbox1></Greenbox1>
      <Image1>
        <img src={bed} width="350" border-radius= "69px" />
      </Image1>
      <Chat></Chat>
      <Chatsub>
        <p>힐링을 위한 음악</p>
        <p>오늘의 음악은</p>
        <p>짙어져 - 멜로망스</p>
      </Chatsub>
      <Greenbox2></Greenbox2>
      <Image2>
        <img src={fox} width="350" />
      </Image2>
      <Garden></Garden>
      <Gardensub>
      <p>힐링을 위한 영상</p>
      <p>오늘의 영상은</p>
      <p>북극여우의 집짓기</p>
      </Gardensub>
      <Greenbox3></Greenbox3>
      <Image3>
        <img src={paint} width="350" />
      </Image3>
      <Player></Player>
      <Playersub>
        <p>사람들이 많이 추천해준 영상</p>
        <p>방구석 미술관</p>
      </Playersub>
    </div>
  );
};

export default Third_music;