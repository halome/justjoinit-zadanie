import React from 'react';
import { Marker, MarkerProps } from 'react-leaflet';

interface Props extends MarkerProps {
  id: string;
  onSelected?: (offerId: string) => void;
}

export const MarkerElement: React.FC<Props> = ({
  id,
  onSelected,
  ...markerProps
}) => {
  return <Marker {...markerProps} onclick={() => onSelected?.(id)} />;
};
