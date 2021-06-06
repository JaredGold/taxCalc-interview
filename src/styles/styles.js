import styled from 'styled-components';

export const InfoDiv = styled.div`
  font-family: Helvetica;
  border: 2px solid #8477c9;
  border-radius: 5px;
  width: 285px;
  height: 39px;
  box-shadow: 0 4px 8px #e7e7ff;
  background: #fff;
  display: flex;
  padding-left: 10px;
  align-items: center;
  gap: 15px;
`;
export const InfoGraphic = styled.div`
  font-family: Helvetica;
  color: #8477c9;
  border: solid 2px #8477c9;
  width: 20.83px;
  height: 20.83px;
  border-radius: 100%;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const InfoContent = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: #8477c9;
`;

export const FormSelection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;

  & > label {
    font-size: 12px;
    font-family: Helvetica;
  }

  & > select,
  input {
    height: 40px;
    border-radius: 5px;
    font-size: 14px;
    border: solid 1px #a4a4a4;
    padding: 0 4px 0 13.73px;
  }
`;

export const CalculateButton = styled.button`
  width: 300px;
  height: 43px;
  border-radius: 5px;
  background: #8477c9;
  color: #fff;
  font-size: 16px;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: #7366b8;
  }
`;

export const CalculateDiv = styled.div`
  width: 332px;
  height: 418px;
  font-family: Helvetica;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const MainCard = styled.div`
  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background: #fff;
  width: 764px;
  height: 512px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
`;

export const AppDiv = styled.div`
  background-color: #e7e7ff;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TaxoTron = styled.div`
  width: 320px;
  height: 448px;
  background-color: #8477c9;
  border-radius: 5px;
  box-shadow: 0px 4px 4px #e7e7ff;
  color: white;
  overflow: hidden;
  & > h1 {
    font-weight: 500;
    font-size: 48px;
    position: relative;
    top: 128px;
    left: 46px;
  }
  & > p {
    width: 264px;
    font-weight: 200;
    font-size: 16px;
    position: relative;
    left: 46px;
    top: 140px;
  }
`;

export const BigPlanet = styled.div`
  height: 203.64px;
  width: 220px;
  background: linear-gradient(
    117.38deg,
    #e7e6ff 10.73%,
    rgba(231, 230, 255, 0) 84.05%
  );
  border-radius: 100%;
  position: relative;
  top: 210px;
  left: -30px;
`;

export const Moon = styled.div`
  background-color: #e7e7ff;
  width: 36.08px;
  height: 35.17px;
  position: relative;
  left: 143.38px;
  top: 37px;
  border-radius: 100%;
  box-shadow: -10px 13px 3px rgba(0, 0, 0, 0.15);
`;

export const DisabledForm = styled.div``;
