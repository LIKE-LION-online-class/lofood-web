import Layout from '../components/FormLayout';
import RegisterForm from '../components/RegisterForm';
function Page() {
  return (
    <Layout title="Enjoy your day!" subtitle="Enter your account">
      <RegisterForm roleType="ROLE_BUSINESS" />
    </Layout>
  );
}

export default Page;
