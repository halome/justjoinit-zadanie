import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const OfferContainer = styled.div`
  width: 60%;
  height: 100vh;
  padding: 0 20px;
  box-sizing: border-box;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  & > div {
    margin: 0 0 20px 0;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 40px 10px 10px 10px;
  box-sizing: border-box;
  background-color: #192637;
  color: #282c34;
  border-radius: 0 0 4px 4px;
  position: relative;
`;

export const BackArrow = styled.div`
  position: absolute;
  left: 10px;
  top: 8px;
  background-color: #b7aeae;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;

  &:after {
    content: '<-';
  }
`;

export const TechStack = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 4px;
  color: #282c34;
  display: flex;
  flex-direction: column;
`;

export const TechStackLabel = styled.div`
  flex-shrink: 1;
  padding: 10px 20px;
  text-align: left;
  border-bottom: 1px solid #b1b3b8;
`;

export const TechStackContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  padding: 20px;
`;

export const TechStackElement = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #b8c0c3;
  border-radius: 15px;
  padding: 10px 20px;

  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;

export const MapContainer = styled.div`
  height: 100vh;
  width: 40%;
  background-color: #999;
  box-sizing: border-box;
`;
