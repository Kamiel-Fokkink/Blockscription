import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RouterRoutes,
} from 'react-router-dom';

import HomePage from '../pages/Home';
import PatientPage from '../pages/Patient';

const Routes = () => (
  <BrowserRouter>
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/patient" element={<PatientPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </RouterRoutes>
  </BrowserRouter>
);

export default Routes;
