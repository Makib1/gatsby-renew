import React from 'react';
import { ThemeProvider } from './src/themeContext';
// import Layout from './src/components/Layout';
// import Layout from './src/components/Layout'; // Import your Layout component
// import Layout from './src/components/layout';

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider>
      {/* <Layout>{element}</Layout> */}
    </ThemeProvider>
  );
};

export { wrapRootElement } from './src/apollo/provider';
