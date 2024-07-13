import ForgotPasswordForm from '../components/ForgotPasswordForm';
import Layout from '../components/FormLayout';

function Page() {
  return (
    <Layout title="Enjoy your day!" subtitle="Enter your email">
      <ForgotPasswordForm />
    </Layout>
  );
}

export default Page;
