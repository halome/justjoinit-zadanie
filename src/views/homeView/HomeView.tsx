import React, { useEffect } from 'react';
import * as S from './style/HomeView.style';
import { SelectCategory } from '../../common/components/selectCategory/SelectCategory';
import { WithLoader } from '../../common/components/loader/WithLoader';
import { OffersList } from '../../common/components/offers/OffersList';
import { useStoreActions, useStoreState } from '../../store/store';
import { useHistory } from 'react-router-dom';
import { OffersMap } from '../../common/components/map/OffersMap';

interface Props {}

export const HomeView: React.FC<Props> = () => {
  const history = useHistory();
  const { isFetching, offersCount } = useStoreState(
    (state) => state.offersState,
  );
  const { fetchOffers } = useStoreActions((actions) => actions.offersState);

  useEffect(() => {
    fetchOffers();
  }, [fetchOffers]);

  const onOfferSelected = (offerId: string) => {
    history.push(`/offer/${offerId}`);
  };

  return (
    <S.Container>
      <S.OffersContainer>
        <WithLoader isLoading={isFetching && !offersCount}>
          <SelectCategory />
          <OffersList onOfferSelected={onOfferSelected} />
        </WithLoader>
      </S.OffersContainer>
      <S.MapContainer>
        <OffersMap />
      </S.MapContainer>
    </S.Container>
  );
};
