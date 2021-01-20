import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import { MarkerElement } from './MarkerElement';
import * as S from './OffersMap.style';
import { useStoreState } from '../../../store/store';
import { OfferModel } from '../../models/offers/OfferModel';
import { useHistory } from 'react-router-dom';

interface Props {
  selectedOffer?: OfferModel;
}

const DEFAULT_CENTER: [number, number] = [52.05924589011585, 19.13818359375];
const DEFAULT_ZOOM = 6;
const SELECTED_OFFER_ZOOM = 12;

export const OffersMap: React.FC<Props> = ({ selectedOffer }) => {
  const history = useHistory();
  const { filteredOffers } = useStoreState((state) => state.offersState);

  const onOfferSelected = (offerId: string) => {
    history.push(`/offer/${offerId}`);
  };

  return (
    <S.Container>
      <Map
        center={
          selectedOffer
            ? [selectedOffer.latitude, selectedOffer.longitude]
            : DEFAULT_CENTER
        }
        zoom={selectedOffer ? SELECTED_OFFER_ZOOM : DEFAULT_ZOOM}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {filteredOffers.map((offer) => (
          <MarkerElement
            key={offer.id}
            id={offer.id}
            position={[offer.latitude, offer.longitude]}
            onSelected={onOfferSelected}
          />
        ))}
      </Map>
    </S.Container>
  );
};
