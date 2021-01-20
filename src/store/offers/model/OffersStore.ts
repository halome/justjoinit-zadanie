import {
  OfferCategory,
  OfferModel,
} from '../../../common/models/offers/OfferModel';
import { Action, Computed, Thunk } from 'easy-peasy';
import { Injections } from '../../../common/models/store/Injections';

export interface OffersStore {
  offers: OfferModel[];
  offersCount: Computed<OffersStore, number>;
  filteredOffers: Computed<OffersStore, OfferModel[]>;
  categories: Computed<OffersStore, OfferCategory[]>;
  selectedCategory: string | null;
  isFetching: boolean;

  setOffers: Action<OffersStore, OfferModel[]>;
  setIsFetching: Action<OffersStore, boolean>;
  selectCategory: Action<OffersStore, string | null>;

  fetchOffers: Thunk<OffersStore, undefined, Injections>;
}
