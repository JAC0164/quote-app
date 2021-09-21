import React, { FC, useState } from 'react';

const Quote: FC<{ quote: string }> = ({ quote }) => {
  const [truncate, setTruncate] = useState(quote.length > 200);
  return (
    <>
      <p className="content">
        {truncate ? `“${quote.slice(0, 200)}”` : `“${quote}”`}
        {quote.length > 200 && (
          <>
            <br />
            <span
              className="toggleTrunc"
              onClick={() => setTruncate(!truncate)}
            >
              {truncate ? 'read more' : 'hidden'}
            </span>
          </>
        )}
      </p>
    </>
  );
};

export default Quote;
