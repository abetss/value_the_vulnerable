/** @jsx jsx */
import React, { useState, useCallback } from 'react';
import { Text, Box, Flex, Heading, Button, jsx } from 'theme-ui';

export const Report = ({ questions = [], onSubmit }) => {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Heading mt="4" color="primary">
        Report
      </Heading>
      <Text mt={3}>Graph visualization will be shown here.</Text>
    </Flex>
  );
};
