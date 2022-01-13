import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NoMatch = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if (path !== '/' || path !== '/about' || path !== '/contact') {
      navigate('/');
    }
  });

  return (
    <div />
  );
};

export default NoMatch;
