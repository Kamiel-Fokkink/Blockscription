import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RouterRoutes,
} from 'react-router-dom';

import HomePage from '../pages/Home';

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </RouterRoutes>
  </BrowserRouter>
);

export default Routes;
