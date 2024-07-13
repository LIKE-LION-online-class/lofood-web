import { CardContent, styled } from '@mui/material';


export const CardContentNoPadding = styled(CardContent)(`
  padding-top: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);
