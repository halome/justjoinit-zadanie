import { OffersService } from './model/OffersService';
import { ResponseStatus, ResponseType } from '../../common/api/Response';
import { OfferModel } from '../../common/models/offers/OfferModel';

export const offersService: OffersService = {
  readOffersList: async ({ apiService }) => {
    try {
      const response = await apiService.get<OfferModel[]>('/offers');
      const isSuccess: boolean =
        response.status === ResponseStatus.OK && !!response.data;

      return {
        type: isSuccess ? ResponseType.OK : ResponseType.UNKNOWN,
        data: isSuccess ? response.data : [],
      };
      
    } catch (err) {
      console.log(err);

      return {
        type: ResponseType.ERROR,
        data: [],
      };
    }
  },
};
