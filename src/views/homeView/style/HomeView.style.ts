import styled from "styled-components";

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

export const OffersContainer = styled.div`
  width: 60%;
	height: 100vh;
	overflow-y: scroll;
`;

export const MapContainer = styled.div`
	height: 100vh;
	width: 40%;
	background-color: #999;
	box-sizing: border-box;
`;
