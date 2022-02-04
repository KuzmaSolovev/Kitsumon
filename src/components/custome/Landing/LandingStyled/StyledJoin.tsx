import styled from "styled-components";
import BeachImg from "../../../../assets/Beach.png";

export const Containter = styled.div`
  background: url(${BeachImg}) no-repeat center;
  background-size: cover;
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;

export const JoinContainer = styled.div`
  width: 322px;
  height: 137px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  text-align: center;
`;

export const JoinText1 = styled.div`
  margin-top: 15px;
  font-family: Arial;
  font-size: 22.65px;
  font-weight: 900;
  color: white;
`;

export const JoinText2 = styled.div`
  width: 250px;
  font-family: Arial;
  font-size: 10.57px;
  color: white;
  margin: auto;
`;

export const JoinBtn = styled.button`
  font-size: 11.33px;
  font-weight: 900;
  font-family: Arial;
  width: 145px;
  height: 30px;
  background-color: #662d91;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  margin-top: 13px;
  cursor: pointer;
`;
