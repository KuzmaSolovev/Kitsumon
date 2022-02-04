import React from "react";
import {
  Container,
  ImgCotainer,
  StrategicText,
  StrategicImgGroup,
  Img,
} from "./LandingStyled/StyledStrategic";

import Trust_Img from "../../../assets/Trust.png";
import Game_Img from "../../../assets/Game.png";
import Fairum_Img from "../../../assets/Fairum.png";
import Synapse_Img from "../../../assets/Synapse.png";
import Smo_Img from "../../../assets/Smo.png";
import Pulse_Img from "../../../assets/Pulse.png";
import Odd_Img from "../../../assets/Odd.png";
import Whale_Img from "../../../assets/Whale.png";
import Avalon_Img from "../../../assets/Avalon.png";
import Girnas_Img from "../../../assets/Girnas.png";
import Seed_Img from "../../../assets/Seed.png";
import Defiboost_Img from "../../../assets/Defiboost.png";
import Beca_Img from "../../../assets/beca.png";

const StrategicPanel = () => {
  return (
    <React.Fragment>
      <Container>
        <StrategicText>Strategic Partners</StrategicText>
        <ImgCotainer>
          <StrategicImgGroup>
            <Img className="img_border" src={Trust_Img} />
          </StrategicImgGroup>
          <StrategicImgGroup>
            <Img className="img_border" src={Game_Img} />
          </StrategicImgGroup>
          <StrategicImgGroup>
            <Img className="img_border" src={Fairum_Img} />
          </StrategicImgGroup>
          <StrategicImgGroup>
            <Img className="img_border" src={Synapse_Img} />
          </StrategicImgGroup>
          <StrategicImgGroup>
            <Img className="img_border" src={Whale_Img} />
          </StrategicImgGroup>
          <StrategicImgGroup>
            <Img className="img_border" src={Beca_Img} />
          </StrategicImgGroup>
          <StrategicImgGroup>
            <Img className="img_border" src={Pulse_Img} />
          </StrategicImgGroup>
          <StrategicImgGroup>
            <Img className="img_border" src={Odd_Img} />
          </StrategicImgGroup>
          <StrategicImgGroup>
            <Img className="img_border" src={Smo_Img} />
          </StrategicImgGroup>
          <StrategicImgGroup>
            <Img className="img_border" src={Avalon_Img} />
          </StrategicImgGroup>
          <StrategicImgGroup>
            <Img className="img_border" src={Seed_Img} />
          </StrategicImgGroup>
          <StrategicImgGroup>
            <Img className="img_border" src={Defiboost_Img} />
          </StrategicImgGroup>
          <StrategicImgGroup>
            <Img className="img_border" src={Girnas_Img} />
          </StrategicImgGroup>
        </ImgCotainer>
      </Container>
    </React.Fragment>
  );
};

export default StrategicPanel;
