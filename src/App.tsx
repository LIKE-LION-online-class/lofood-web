import { BrowserRouter } from 'react-router-dom';
import Routing from './router/Routing';
import { RouterProvider} from "react-router-dom";
const App = () => {
  return (
    <RouterProvider router={Routing}/>
  );
};

export default App;
