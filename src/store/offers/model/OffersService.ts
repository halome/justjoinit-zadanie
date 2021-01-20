import { ApiService } from '../../../common/api/Api';
import { RequestResponse } from '../../../common/api/Response';
import { OfferModel } from '../../../common/models/offers/OfferModel';

export interface OffersService {
  readOffersList: (data: {
    apiService: ApiService;
  }) => Promise<RequestResponse<OfferModel[]>>;
}
