import RegisterForm from '../components/RegisterForm';
import Layout from '../components/FormLayout';

function Page() {
  return (
    <Layout title="Enjoy your day!" subtitle="Enter your account">
      <RegisterForm roleType="ROLE_BUSINESS" />
    </Layout>
  );
}

export default Page;
