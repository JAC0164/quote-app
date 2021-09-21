import type { QuoteType } from 'types';

const baseApiUrl = 'https://animechan.vercel.app/api';

export const getQuote = async (): Promise<QuoteType> => {
  const res = await fetch(`${baseApiUrl}/random`);
  return await res.json();
};

export const getQuotesByAuthor = async (
  author: string,
): Promise<QuoteType[]> => {
  const res = await fetch(`${baseApiUrl}/quotes/character?name=${author}`);
  return await res.json();
};
