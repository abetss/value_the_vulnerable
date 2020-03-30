/** @jsx jsx */
import { Text, Box, Flex, Heading, jsx } from 'theme-ui';
import { PrimaryButton } from './PrimaryButton';

export const SubmissionThankYou = ({ questions = [], onSubmit, onSetPage }) => {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Heading mt="4" color="primary" as="h1">
        Thank you
      </Heading>
      <Box mt="3">
        <Text>We appreciate your taking the time to complete our survey to help us raise awareness.</Text>
      </Box>
      <PrimaryButton
        onClick={() => onSetPage('report')}
        alignSelf="center"
        mt="6"
        sx={{
          width: ['90%', '70%', '50%'],
          alignSelf: 'center'
        }}
        title="See graphical report"
      />
    </Flex>
  );
};
