import type { QuoteType, QuotesType } from 'types';

const baseApiUrl = 'https://api.quotable.io';

export const getQuote = async (): Promise<QuoteType> => {
  const res = await fetch(`${baseApiUrl}/random`);
  return await res.json();
};

export const getQuotesByAuthor = async (
  author: string,
): Promise<QuotesType> => {
  const res = await fetch(`${baseApiUrl}/quotes?author=${author}`);
  return await res.json();
};
