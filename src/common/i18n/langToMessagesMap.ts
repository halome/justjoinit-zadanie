// @ts-ignore
import pl from './lang/pl.json';
import en from './lang/en.json';
import { Lang } from './models/Lang';

type LangToMessages = {
  [key in Lang]: { [key: string]: string };
};

export const langToMessagesMap: LangToMessages = {
  [Lang.PL]: pl,
  [Lang.EN]: en,
};
