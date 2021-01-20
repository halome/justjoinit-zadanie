import React from 'react';
import { useStoreState } from '../../../store/store';
import { Offer } from './Offer';

interface Props {
  onOfferSelected: (offerId: string) => void;
}

export const OffersList: React.FC<Props> = ({ onOfferSelected }) => {
  const { filteredOffers } = useStoreState((state) => state.offersState);

  return (
    <div>
      {filteredOffers.map((offer) => (
        <Offer key={offer.id} offer={offer} onSelected={onOfferSelected} />
      ))}
    </div>
  );
};
