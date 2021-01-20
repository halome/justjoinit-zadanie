import React from 'react';
import * as S from './style/WithLoader.style';

interface Props {
  isLoading?: boolean;
}

export const WithLoader: React.FC<React.PropsWithChildren<Props>> = ({
  isLoading = false,
  children,
}) => {
  return isLoading ? (
    <S.Container>
      <div>LOADING</div>
      <div>
        <S.Spinner />
      </div>
    </S.Container>
  ) : (
    <>{children}</>
  );
};
