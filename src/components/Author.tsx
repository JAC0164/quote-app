import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { QuoteType } from '../../types/index';
import { getQuotesByAuthor } from '../util/index';
import Quote from './Quote';
import { Loading } from './Loading';

const Author = () => {
  const { name } = useParams<{ name: string }>();
  const [quotes, setQuotes] = useState<QuoteType[]>([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getQuotesByAuthor(name)
      .then((q) => {
        setQuotes(q.results);
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
        <Fragment>
          <h1 className="capitalize">{name.split('-').join(' ')}</h1>
          {quotes?.map((q) => (
            <Quote key={q._id} quote={q.content} />
          ))}
        </Fragment>
      )}
      {!load && !quotes.length && (
        <div>
          <h2 className="noQuoteFound">No results for “{name}”</h2>
        </div>
      )}
      {load && <Loading />}
    </div>
  );
};

export default Author;
