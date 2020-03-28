/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Heading } from 'theme-ui';

export const Layout = props => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // set this to `minHeight: '100vh'` for full viewport height
        minHeight: '100vh'
      }}
    >
      <header
        sx={{
          width: '100%',
          bg: 'primary',
          px: '5',
          py: 3,
          textAlign: 'center'
        }}
      >
        <Heading as="h1" color="on-primary-text" display="inline-block">
          Value the Vulnerable
        </Heading>
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          'min-height': '100%',
          px: '5',
          pt: 4
        }}
      >
        {props.children}
      </main>
    </div>
  );
};
