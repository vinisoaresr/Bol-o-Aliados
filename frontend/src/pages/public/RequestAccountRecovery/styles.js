import styled from "styled-components";
import img_bg_small from "../../../assets/login_bg_small.jpg";
import img_bg_medium from "../../../assets/login_bg_medium.jpg";
import img_bg_large from "../../../assets/login_bg_large.jpg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 480px) {
    background-image: url(${img_bg_small});
  }
  @media (min-width: 480px) and (max-width: 1024px) {
    background-image: url(${img_bg_medium});
  }
  @media (min-width: 1024px) {
    background-image: url(${img_bg_large});
  }
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Title = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: black;
`;

export const Label = styled.label`
  padding: 5px 0px 5px 0px;
  text-align: justify;
  font-size: 14px;
  font-weight: 400;
  color: gray;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: gray;
  }
`;
