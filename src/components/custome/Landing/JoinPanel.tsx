import React from "react";
import {
  Containter,
  JoinBtn,
  JoinContainer,
  JoinText1,
  JoinText2,
} from "./LandingStyled/StyledJoin";

const JoinPanel = () => {
  return (
    <React.Fragment>
      <Containter>
        <JoinContainer>
          <JoinText1>JOIN OUR COMMUNITY</JoinText1>
          <JoinText2>
            Keep up to date with the latest news and reiease information for
            Kitsumon by joining our mailing list.
          </JoinText2>
          <JoinBtn>JOIN US</JoinBtn>
        </JoinContainer>
      </Containter>
    </React.Fragment>
  );
};

export default JoinPanel;
