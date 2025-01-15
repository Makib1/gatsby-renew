// import './src/styles/style.scss';
// src/gatsby-ssr.js
import React from 'react';
import { ThemeProvider } from './src/themeContext';
import Layout from './src/components/Layout'; // Import your Layout component

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider>
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
};

export { wrapRootElement } from './src/apollo/provider';