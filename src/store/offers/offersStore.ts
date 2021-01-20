import { OffersStore } from './model/OffersStore';
import { action, computed, thunk } from 'easy-peasy';
import { offersService } from './offersService';
import {
  OfferCategory,
  OfferModel,
  Skill,
} from '../../common/models/offers/OfferModel';
import { RequestResponse, ResponseType } from '../../common/api/Response';

export const offersStore: OffersStore = {
  offers: [],
  selectedCategory: null,
  isFetching: false,

  setOffers: action((state, offers) => {
    state.offers = offers;
  }),
  setIsFetching: action((state, isFetching) => {
    state.isFetching = isFetching;
  }),

  selectCategory: action((state, category) => {
    state.selectedCategory = category;
  }),

  fetchOffers: thunk(async (actions, _, { injections: { apiService } }) => {
    actions.setIsFetching(true);

    const response: RequestResponse<
      OfferModel[]
    > = await offersService.readOffersList({ apiService });

    if (response.type === ResponseType.OK) {
      actions.setOffers(response.data);
    }

    actions.setIsFetching(false);
  }),

  offersCount: computed([(state) => state.offers], (offers) => {
    return offers.length;
  }),

  filteredOffers: computed(
    [(state) => state.offers, (state) => state.selectedCategory],
    (offers, selectedCategory) => {
      return selectedCategory
        ? offers.filter((o) =>
            o.skills.find((s) => s.name === selectedCategory),
          )
        : offers;
    },
  ),

  categories: computed([(state) => state.offers], (offers) => {
    const result: OfferCategory[] = [];

    offers.map((o) =>
      o.skills.forEach((sk: Skill) => {
        if (!result.find((se) => se.type === sk.name)) {
          result.push({
            type: sk.name,
            value: sk.name,
            offers: offers
              .map((o) => o.skills)
              .flat()
              .filter((se) => se.name === sk.name).length,
          });
        }
      }),
    );

    return result;
  }),
};
