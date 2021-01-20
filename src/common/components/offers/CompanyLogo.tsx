import React from 'react';

interface Props {
  companyName?: string;
  companyLogoUrl: string;
}

const DEFAULT_LOGO_URL =
  'https://bucket.justjoin.it/offers/company_logos/thumb/1c43c2b9efbe007a03fb3950bc360dd980d89be7.jpg?1610615462';

export const CompanyLogo: React.FC<Props> = ({
  companyName,
  companyLogoUrl,
}) => {
  const setDefaultLogo = (
    ev: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    ev.currentTarget.src = DEFAULT_LOGO_URL;
  };

  return (
    <img
      alt={companyName ?? ''}
      src={companyLogoUrl}
      onError={setDefaultLogo}
    />
  );
};
