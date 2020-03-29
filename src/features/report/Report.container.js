/** @jsx jsx */
import React, { useState, useCallback } from 'react';
import { Text, Box, Flex, Heading, Button, jsx } from 'theme-ui';

export const Report = ({ questions = [], onSubmit }) => {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Heading mt="4">Report</Heading>
      <Box mt="3">Thank you for completing the survey.</Box>
    </Flex>
  );
};
