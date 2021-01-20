import styled from 'styled-components';

interface ContainerProps {
  isClickable?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  border: 1px solid black;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  ${({ isClickable }) =>
    isClickable &&
    `
		cursor: pointer
	`}
`;

export const OfferDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LogoContainer = styled.div`
  flex: 1;
  padding: 5px;
`;

export const NameAndLocation = styled.div`
  font-size: 18px;
  color: #646464;
  display: flex;
  flex-direction: row;

  & > div:not(:last-of-type):after {
    content: '|';
    padding: 0 10px;
  }
`;

export const Title = styled.div`
  font-size: 26px;
  color: #c4c4c4;
	text-align: left;
`;

export const Salary = styled.div`
  font-size: 20px;
  color: #4f6e6e;
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const Skill = styled.div`
  font-size: 18px;
  color: #646464;

  &:not(:last-of-type):after {
    content: '|';
    padding: 0 10px;
  }
`;
