import { RouterProvider } from 'react-router-dom';
import Routing from './router/Routing';
import { Suspense } from 'react';
const App = () => {
  return (
    <Suspense fallback={<div></div>}>
      <RouterProvider router={Routing} />
    </Suspense>
  );
};

export default App;
