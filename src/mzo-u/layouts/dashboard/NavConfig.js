// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => < Iconify icon = { name }
width = { 22 }
height = { 22 }
/>;

const navConfig = [{
        title: 'dashboard',
        path: '/mzo/dashboard',
        icon: getIcon('eva:pie-chart-2-fill'),
    },
    {
        title: 'Applications',
        path: '/mzo/apps',
        icon: getIcon('eva:people-fill'),
    }


];

export default navConfig;