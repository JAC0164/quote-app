import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { QuoteType } from '../../types/index';
import { getQuotesByAuthor } from '../util/index';
import Quote from './Quote';

const Author = () => {
  const { name } = useParams<{ name: string }>();
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getQuotesByAuthor(name)
      .then((q) => {
        setQuotes(q);
        setLoad(false);
      })
      .catch((e) => {
        console.log(e);
        setLoad(false);
      });
    return () => {};
  }, []);

  return (
    <div className="authorQuotes">
      {!load && quotes.length && (
        <>
          <h1>{name}</h1>
          <>
            {quotes?.map((q) => {
              return <Quote quote={q.quote} />;
            })}
          </>
        </>
      )}
      {!load && !quotes.length && (
        <div>
          <h2 className="noQuoteFound">No results for “{name}”</h2>
        </div>
      )}
      {load && (
        <div>
          <h2 className="loader">Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default Author;
