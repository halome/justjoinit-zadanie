import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style/OfferView.style';
import { OffersMap } from '../../common/components/map/OffersMap';
import { Offer } from '../../common/components/offers/Offer';
import { useOfferFromParams } from '../../common/hooks/useOfferFromParams';

interface Props {}

export const OfferView: React.FC<Props> = () => {
  const history = useHistory();
  const { currentOffer, mostRequiredSkills } = useOfferFromParams();

  useEffect(() => {
    if (!currentOffer) {
      history.push('/');
    }
  }, [currentOffer, history]);

  return currentOffer ? (
    <S.Container>
      <S.OfferContainer>
        <S.Header>
          <S.BackArrow
            onClick={() => {
              history.push('/');
            }}
          />
          <Offer offer={currentOffer} />
        </S.Header>
        <S.TechStack>
          <S.TechStackLabel>Most required stack</S.TechStackLabel>
          <S.TechStackContainer>
            {mostRequiredSkills.map((skill) => (
              <S.TechStackElement>
                <div>{skill.name}</div>
                <div>({skill.level}/5)</div>
                <div>test001</div>
              </S.TechStackElement>
            ))}
          </S.TechStackContainer>
        </S.TechStack>
      </S.OfferContainer>
      <S.MapContainer>
        <OffersMap selectedOffer={currentOffer} />
      </S.MapContainer>
    </S.Container>
  ) : null;
};
