import React from 'react';
import { Link } from 'react-router-dom';

const Page_404 = () => {
  return (
    <div className="page-404">
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Page_404;
