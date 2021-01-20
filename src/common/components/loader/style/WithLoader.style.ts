import styled from 'styled-components';
import image from './spinnerIcon.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Spinner = styled.img.attrs({
	src: image
})`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
	
  width: 40px;
  animation: rotation 1s infinite linear;
`;
