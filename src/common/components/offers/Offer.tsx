import React, { useMemo } from 'react';
import { OfferModel } from '../../models/offers/OfferModel';
import * as S from './style/Offer.style';
import { CompanyLogo } from './CompanyLogo';
import { thousandSeparator } from '../../utils/thousandSeparator';

interface Props {
  offer: OfferModel;
  onSelected?: (id: string) => void;
}

export const Offer: React.FC<Props> = ({ offer, onSelected }) => {
  const onClick = () => {
    onSelected?.(offer.id);
  };

  const salary = useMemo(() => {
    const { salaryFrom, salaryTo } = offer;

    if (salaryFrom === null || salaryTo === null) {
      return 'Undisclosed salary';
    }
    return `${thousandSeparator(salaryFrom)} - ${thousandSeparator(salaryTo)}`;
  }, [offer]);

  return (
    <S.Container onClick={onClick} isClickable={!!onSelected}>
      <S.OfferDetailsContainer>
        <S.Title>{offer.title}</S.Title>
        <S.Salary>{salary}</S.Salary>
        <S.Skills>
          {offer.skills.map((skill) => (
            <S.Skill key={skill.name}>{skill.name}</S.Skill>
          ))}
        </S.Skills>
      </S.OfferDetailsContainer>
      <S.CompanyContainer>
        <S.LogoContainer>
          <CompanyLogo
            companyLogoUrl={offer.companyLogoUrl}
            companyName={offer.companyName}
          />
        </S.LogoContainer>
        <S.NameAndLocation>
          <div>{offer.companyName}</div>
          <div>{offer.city}</div>
        </S.NameAndLocation>
      </S.CompanyContainer>
    </S.Container>
  );
};
