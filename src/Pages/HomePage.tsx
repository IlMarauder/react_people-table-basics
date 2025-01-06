import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { PageNotFound } from './PageNotFound';

export const HomePage: React.FC = () => {
  const { param } = useParams();

  if (param === 'home') {
    return <Navigate to=".." />;
  } else if (!param) {
    return (
      <main className="section">
        <div className="container">
          <h1 className="title">Home Page</h1>
        </div>
      </main>
    );
  }

  return <PageNotFound />;
};
