import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Quote from './Quote';
import type { QuoteType } from 'types';

const QuoteContainer: FC<{ quote: QuoteType }> = ({ quote }) => {
  return (
    <div className="quote">
      <Quote quote={quote.content} />
      <Link to={`author/${quote.authorSlug}`}>
        <p className="author">
          <b>{quote.author}</b>
          <span>{quote.tags.join(' - ')}</span>
        </p>
      </Link>
    </div>
  );
};

export default QuoteContainer;
