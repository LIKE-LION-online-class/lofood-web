import LoginForm from '../components/LoginForm';
import Layout from '../components/FormLayout';
import { Box } from '@mui/material';
import SelectLanguage from '../../../layouts/Header/SelectLanguage';
import { useTranslation } from 'react-i18next';
function Page() {
  const { t } = useTranslation();
  return (
    <Layout title={t('Enjoy your day!')} subtitle={t('Enter your account')}>
      <LoginForm />
      <Box sx={{ position: "fixed", bottom: '20px', right: '70px' }}>
        <SelectLanguage />
      </Box>
    </Layout>
  );
}

export default Page;
