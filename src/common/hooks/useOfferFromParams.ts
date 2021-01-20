import { useStoreState } from '../../store/store';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { OfferModel, Skill } from '../models/offers/OfferModel';

interface Params {
  id: string;
}

interface Result {
  currentOffer?: OfferModel;
  mostRequiredSkills: Skill[];
}

export const useOfferFromParams = (): Result => {
  const { id } = useParams<Params>();
  const { offers } = useStoreState((state) => state.offersState);

  const currentOffer = useMemo(() => {
    return offers.find((offer) => id === offer.id);
  }, [id, offers]);

  const mostRequiredSkills = useMemo(() => {
    return currentOffer
      ? currentOffer.skills
          .sort((a, b) => (a.level > b.level ? -1 : a.level < b.level ? 1 : 0))
          .slice(0, 5)
      : [];
  }, [currentOffer]);

  return {
    currentOffer,
    mostRequiredSkills,
  };
};
