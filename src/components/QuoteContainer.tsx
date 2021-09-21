import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Quote from './Quote';
import type { QuoteType } from 'types';

const QuoteContainer: FC<{ quote: QuoteType }> = ({ quote }) => {
  return (
    <div className="quote">
      <Quote quote={quote.quote} />
      <Link to={`author/${quote.character}`}>
        <p className="author">
          <b>{quote.character}</b>
          <span>{quote.anime}</span>
        </p>
      </Link>
    </div>
  );
};

export default QuoteContainer;
