import { Navigate, useRoutes } from 'react-router-dom';
// layouts applicant
import DashboardLayout from './applicant-u/layouts/dashboard';
import LogoOnlyLayout from './applicant-u/layouts/LogoOnlyLayout';
//
// layouts admin
import DashboardAdmin from './admin-u/layouts/dashboard';
//
// layouts alc
import DashboardAlc from './alc-u/layouts/dashboard';
//
// layouts registrar
import DashboardRegistrar from './registrar-u/layouts/dashboard';
//
// layouts dlo
import DashboardDLO from './dlo-u/layouts/dashboard';
//
// layouts dlb
import DashboardDLB from './dlb-u/layouts/dashboard';
//
// layouts mzo
import DashboardMZO from './mzo-u/layouts/dashboard';
//
import Progress from './applicant-u/pages/Progress';
import Titles from './applicant-u/pages/Titles';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import ProgressApp from './applicant-u/pages/ProgressApp';
import DashboardApp from './applicant-u/pages/DashboardApp';

// admin
import Admin from './admin-u/pages/DashboardApp';
import Officers from './admin-u/pages/Officers';
import Adminadd from './admin-u/pages/Form';

// alc
import Alc from './alc-u/pages/DashboardApp';
import AlcApps from './alc-u/pages/Apps';
import AlcView from './alc-u/pages/Form';
import AlcReject from './alc-u/pages/Reject';
import AlcUpload from './alc-u/pages/Upload';

// registrar
import Registrar from './registrar-u/pages/Dashboard';
import RegApps from './registrar-u/pages/Apps';
import RegView from './registrar-u/pages/ViewApp';
import RegDb from './registrar-u/pages/Db';
import RegReject from './registrar-u/pages/Reject';
import RegUpload from './registrar-u/pages/Upload';
import RegFull from './registrar-u/pages/FullView';

// dlo
import Dlo from './dlo-u/pages/DashboardApp';
import DloReg from './dlo-u/pages/Reject';
import DloApp from './dlo-u/pages/Apps';
import DloUpl from './dlo-u/pages/Upload';
import DloView from './dlo-u/pages/View';

// dlo
import Dlb from './dlb-u/pages/DashboardApp';
import DlbReg from './dlb-u/pages/Reject';
import DlbApp from './dlb-u/pages/Apps';
import DlbUpl from './dlb-u/pages/Upload';
import DlbView from './dlb-u/pages/View';

// mzo
import Mzo from './mzo-u/pages/DashboardApp';
import MzoApp from './mzo-u/pages/Apps';
import MzoView from './mzo-u/pages/View';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/applicant',
      element: <DashboardLayout />,
      children: [
        { path: 'apply', element: <DashboardApp /> },
        { path: 'titles', element: <Titles /> },
        { path: 'progressapp', element: <ProgressApp /> },
        { path: 'Progress', element: <Progress /> },
        
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/register" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
        {
          path: '/admin',
          element: <DashboardAdmin />,
          children: [
            { path: 'dashboard', element: <Admin /> },
            { path: 'officers', element: <Officers /> },
            { path: 'adduser', element: <Adminadd /> },
            
          ],
        },  

        {
          path: '/alc',
          element: <DashboardAlc />,
          children: [
            { path: 'dashboard', element: <Alc /> },
            { path: 'applications', element: <AlcApps /> },
            { path: 'view', element: <AlcView /> },
            { path: 'reject', element: <AlcReject /> },
            { path: 'upload', element: <AlcUpload /> },
            
          ],
        },
        {
          path: '/lreg',
          element: <DashboardRegistrar />,
          children: [
            { path: 'dashboard', element: <Registrar /> },
            { path: 'apps', element: <RegApps /> },
            { path: 'view', element: <RegView /> },
            { path: 'db', element: <RegDb /> },
            { path: 'reject', element: <RegReject /> },
            { path: 'upload', element: <RegUpload /> },
            { path: 'fullview', element: <RegFull /> },
            
          ],
        },
        {
          path: '/dlo',
          element: <DashboardDLO />,
          children: [
            { path: 'dashboard', element: <Dlo /> },
            { path: 'apps', element: <DloApp /> },
            { path: 'view', element: <DloView /> },
            { path: 'reject', element: <DloReg /> },
            { path: 'upload', element: <DloUpl /> },
            
          ],
        },
        {
          path: '/dlb',
          element: <DashboardDLB />,
          children: [
            { path: 'dashboard', element: <Dlb /> },
            { path: 'apps', element: <DlbApp /> },
            { path: 'view', element: <DlbView /> },
            { path: 'reject', element: <DlbReg /> },
            { path: 'upload', element: <DlbUpl /> },
            
          ],
        },
        {
          path: '/mzo',
          element: <DashboardMZO />,
          children: [
            { path: 'dashboard', element: <Mzo /> },
            { path: 'apps', element: <MzoApp /> },
            { path: 'view', element: <MzoView /> },
            
            
          ],
        },
        
        
     
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
