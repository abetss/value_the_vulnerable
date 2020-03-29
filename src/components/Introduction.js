/** @jsx jsx */
import React from 'react';
import { Heading, Box, Flex, Button, jsx } from 'theme-ui';

export const Introduction = props => {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Heading>Introduction</Heading>
      <Box mt="3">
        We want to raise awareness to issues arising from the corona crisis. The results shown here are no scientific
        representation...
      </Box>
      <Button
        mt="6"
        bg="secondary"
        sx={{
          width: ['90%', '70%', '50%'],
          alignSelf: 'center',
          appearance: 'none',
          borderRadius: 2,
          '&:hover': {
            cursor: 'pointer',
            opacity: 0.9
          },
          '&:focus': {
            outline: 'none'
          }
        }}
      >
        Start Questionary
      </Button>
    </Flex>
  );
};
