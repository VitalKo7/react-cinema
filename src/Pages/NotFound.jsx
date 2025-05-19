import React from 'react';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Page Not Found</h2>
      <p className="notfound-text">
        Страница, которую вы ищете, не существует или была перемещена.
      </p>
    </div>
  );
};

export default NotFound;
