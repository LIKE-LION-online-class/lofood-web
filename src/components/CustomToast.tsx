import { Snackbar, Alert } from '@mui/material';
import { toast, Toaster } from 'react-hot-toast';

export const notify = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
  toast.custom((t) => (
    <Snackbar
      open={t.visible}
      autoHideDuration={6000}
      onClose={() => toast.dismiss(t.id)}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={() => toast.dismiss(t.id)} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  ));
};

const CustomToast = () => {
  return <Toaster />;
};

export default CustomToast;
