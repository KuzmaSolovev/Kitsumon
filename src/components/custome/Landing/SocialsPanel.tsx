import React from "react";
import {
  Container,
  KitsuImg,
  SocialIcon,
  SocialLinks,
  SocialsText,
} from "./LandingStyled/StyledSocials";

import Kitsu_Image from "../../../assets/Kitsu.png";
import DiscordIcon from "../../../assets/SVG/Discord.svg";
import FacebookIcon from "../../../assets/SVG/Facebook.svg";
import GithubIcon from "../../../assets/SVG/Github.svg";
import InstagramIcon from "../../../assets/SVG/Instagram.svg";
import LogoIcon from "../../../assets/SVG/Logo.svg";
import RedditIcon from "../../../assets/SVG/Reddit.svg";
import YouTubeIcon from "../../../assets/SVG/YouTube.svg";

const SocialsPanel = () => {
  return (
    <React.Fragment>
      <Container>
        <SocialsText>Socials</SocialsText>
        <SocialLinks>
          <SocialIcon src={DiscordIcon}></SocialIcon>
          <SocialIcon src={RedditIcon}></SocialIcon>
          <SocialIcon src={GithubIcon}></SocialIcon>
          <SocialIcon src={FacebookIcon}></SocialIcon>
          <SocialIcon src={InstagramIcon}></SocialIcon>
          <SocialIcon src={YouTubeIcon}></SocialIcon>
          <SocialIcon src={LogoIcon}></SocialIcon>
        </SocialLinks>
        <KitsuImg src={Kitsu_Image}></KitsuImg>
      </Container>
    </React.Fragment>
  );
};

export default SocialsPanel;
