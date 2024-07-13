import { Box } from '@mui/material';
import styled from '@mui/material/styles/styled';

const SkeletonBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
  borderRadius: '4px',
  marginBottom: theme.spacing(2),
  animation: 'pulse 1.5s ease-in-out infinite',
  '@keyframes pulse': {
    '0%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0.4,
    },
    '100%': {
      opacity: 1,
    },
  },
}));

export default SkeletonBox;
