export interface Skill {
  name: string;
  level: number;
}

export enum Currency {
  PLN = 'pln',
  USD = 'usd',
}

export enum EmploymentType {
  B2B = 'b2b',
  PERMANENT = 'permanent',
}

export interface OfferModel {
  id: string;
  title: string;
  street: string;
  city: string;
  countryCode: string;
  markerIcon: string;
  remote: boolean;
  experienceLevel: string;
  salaryFrom: number;
  salaryTo: number;
  salaryCurrency: Currency;
  latitude: number;
  longitude: number;
  employmentType: EmploymentType;
  publishedAt: string;
  companyName: string;
  companyUrl: string;
  companySize: string;
  companyLogoUrl: string;
  skills: Skill[];
}

export interface OfferCategory {
  type: string;
  value: string;
  offers: number;
}
