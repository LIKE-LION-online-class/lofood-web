import LoginForm from '../components/LoginForm';
import Layout from '../components/FormLayout';

function Page() {
  return (
    <Layout title="Enjoy your day!" subtitle="Enter your account">
      <LoginForm />
    </Layout>
  );
}

export default Page;
