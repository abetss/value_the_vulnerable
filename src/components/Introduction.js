/** @jsx jsx */
import { Heading, Box, Flex, jsx, Divider, Link, Text } from 'theme-ui';
import { PrimaryButton } from './PrimaryButton';

export const Introduction = ({ onNextClicked, ...props }) => {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Heading mt="4" color="primary">
        Introduction
      </Heading>
      <Box mt="3">
        We want to raise awareness to issues arising from the corona crisis. The results shown here are no scientific
        representation...
      </Box>
      <PrimaryButton
        onClick={() => onNextClicked('survey')}
        alignSelf="center"
        mt="6"
        sx={{
          width: ['90%', '70%', '50%'],
          alignSelf: 'center'
        }}
        title="Start Questionary"
      />
      <Divider mt={5} />
      <Box mt="3">
        <Flex>
          <Text>If you have already completed the survey, you can directly</Text>
          <Link
            as="a"
            ml={2}
            onClick={() => onNextClicked('report')}
            sx={{
              '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline',
                opacity: 0.9
              }
            }}
          >
            see the report
          </Link>
          <Text>.</Text>
        </Flex>
      </Box>
    </Flex>
  );
};
