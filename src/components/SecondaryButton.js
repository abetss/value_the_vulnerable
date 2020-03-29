/** @jsx jsx */
import React from 'react';
import { Button, jsx } from 'theme-ui';

export const SecondaryButton = ({ title, ...props }) => (
  <Button
    {...props}
    mr="1"
    bg="background"
    borderColor="primary"
    color="text"
    sx={{
      width: 5,
      appearance: 'none',
      borderRadius: 2,
      border: '1px solid',
      '&:hover': {
        cursor: 'pointer',
        opacity: 0.9
      },
      '&:focus': {
        outline: 'none'
      }
    }}
  >
    {title}
  </Button>
);

export const SecondaryButton2 = ({ title, ...props }) => (
  <Button
    {...props}
    mt="6"
    mr="1"
    bg="background"
    borderColor="primary"
    color="text"
    sx={{
      width: 5,
      appearance: 'none',
      borderRadius: 2,
      border: '1px solid',
      '&:hover': {
        cursor: 'pointer',
        opacity: 0.9
      },
      '&:focus': {
        outline: 'none'
      }
    }}
  >
    {title}
  </Button>
);
