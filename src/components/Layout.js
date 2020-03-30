/** @jsx jsx */
import { jsx } from 'theme-ui';
import logo from '../app/logo.svg';
import { Heading, Flex, Image } from 'theme-ui';

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
          // height: '74px',
          bg: 'primary',
          px: '5',
          // py: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Flex sx={{ alignItems: 'center' }}>
          <Image src={logo} alt="logo" sx={{ width: '80', height: '80px' }} />
          <Heading as="h3" color="on-primary-text" display="inline-block" ml={2} mt={2} sx={{ fontWeight: 400 }}>
            Value the Vulnerable
          </Heading>
        </Flex>
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
          'min-height': '100%',
          px: [3, 4, 7],
          pt: [3, 2, 4]
        }}
      >
        {props.children}
      </main>
    </div>
  );
};
