import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(1)}
      </p>
    </div>
  );
};
