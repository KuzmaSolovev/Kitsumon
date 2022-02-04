import React from "react";
import {
  BoyImg,
  BoyImgCotainer,
  Container,
  CookImg,
  MobaBtn,
  MobaContainer,
  MobaContent,
  MobaContent1,
  MobaContent2,
  MobaContent3,
  RawImg,
} from "./LandingStyled/StyledMoba";

import Girl from "../../../assets/img/GIRL.svg";
import Raw from "../../../assets/img/RAW.svg";
import Cook from "../../../assets/img/COOK.svg";

const MobaPanel = () => {
  return (
    <React.Fragment>
      <Container>
        <BoyImgCotainer>
          <BoyImg data={Girl}></BoyImg>
          <RawImg data={Raw}></RawImg>
          <CookImg data={Cook}></CookImg>
        </BoyImgCotainer>
        <MobaContainer>
          <MobaContent>
            <MobaContent1>More than a MOBA</MobaContent1>
            <MobaContent2>
              As a trainer players can choose to participate in a range of
              Projession's. Learn to fish, cook, mine materials and much much
              more as you create amazing items that can benefit your Kitsu.
            </MobaContent2>
            <MobaContent3>
              Projessions give players access to numerous types of NFT products
              that can be traded to the
            </MobaContent3>
            <MobaBtn>Whitepaper</MobaBtn>
          </MobaContent>
        </MobaContainer>
      </Container>
    </React.Fragment>
  );
};

export default MobaPanel;
