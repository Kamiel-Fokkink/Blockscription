import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RouterRoutes,
} from 'react-router-dom';

import HomePage from '../pages/Home';
import RegisterPage from '../pages/Register';
import LoginPage from '../pages/Login';

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </RouterRoutes>
  </BrowserRouter>
);

export default Routes;
