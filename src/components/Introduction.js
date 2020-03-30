/** @jsx jsx */
import { Heading, Box, Flex, jsx, Divider, Link, Text, Spinner } from 'theme-ui';
import { PrimaryButton } from './PrimaryButton';
import YouTube from 'react-youtube';

const opts = {
  width: '100%',
  playerVars: {
    autoplay: 0
  }
};

export const Introduction = ({ onNextClicked, showLoading, ...props }) => {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Heading mt="4" color="primary" as="h1">
        Welcome
      </Heading>
      <Box mt="3">
        We want to raise awareness to issues arising from the corona crisis. The results shown here are no scientific
        representation.
      </Box>
      <Box mt="4">
        <YouTube videoId="m031LCLT0pQ" opts={opts} />
      </Box>

      <Flex mt={[4, 4, 5]} sx={{ flexDirection: 'column', alignItems: 'center' }}>
        {showLoading && (
          <Flex sx={{ display: 'absolute', alignItems: 'center' }}>
            <Text>Loading questions</Text>
            <Spinner ml="3" />
          </Flex>
        )}
        <PrimaryButton
          onClick={() => {
            !showLoading && onNextClicked('survey');
          }}
          alignSelf="center"
          sx={{
            mt: [2, 3, 3],
            width: ['100%', '70%', '50%'],
            alignSelf: 'center'
          }}
          title="Start Questionary"
        />
      </Flex>

      <Divider mt={5} />
      <Box mt="3" mb={5}>
        <Flex>
          <Text>If you have already completed the survey, you can directly</Text>
          <Link
            as="a"
            ml={2}
            onClick={() => onNextClicked('report')}
            sx={{
              fontWeight: 600,
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
