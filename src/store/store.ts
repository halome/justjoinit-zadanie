import { createStore, createTypedHooks } from 'easy-peasy';
import { StoreModel } from '../common/models/store/StoreModel';
import { ApiService } from '../common/api/Api';
import { offersStore } from './offers/offersStore';

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export const store = createStore<StoreModel>(
  {
    offersState: offersStore,
  },
  {
    injections: {
      apiService: new ApiService('https://test.justjoin.it/'),
    },
  },
);
