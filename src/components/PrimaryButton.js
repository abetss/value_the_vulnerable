/** @jsx jsx */
import { Button, jsx } from 'theme-ui';

export const PrimaryButton = ({ title, children, ...props }) => {
  return (
    <Button
      {...props}
      bg="secondary"
      sx={{
        width: 5,
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
      {title}
    </Button>
  );
};
