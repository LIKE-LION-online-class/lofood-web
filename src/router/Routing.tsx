import { Routes, Route } from 'react-router-dom';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
// import Home from '@/pages/Home/Home';
import Search from '@/pages/SearchWithMap/Search';
import Layout from '@/components/layout';

const Routing = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Layout>
            <Search />
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <Search />
          </Layout>
        }
      />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
};

export default Routing;
