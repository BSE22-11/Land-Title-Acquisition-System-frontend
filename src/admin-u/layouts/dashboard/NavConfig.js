// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => < Iconify icon = { name }
width = { 22 }
height = { 22 }
/>;

const navConfig = [{
        title: 'dashboard',
        path: '/admin/dashboard',
        icon: getIcon('eva:pie-chart-2-fill'),
    },
    {
        title: 'Officers',
        path: '/admin/officers',
        icon: getIcon('eva:people-fill'),
    },
    {
        title: 'Add Officer',
        path: '/admin/adduser',
        icon: getIcon('eva:people-fill'),
    },

];

export default navConfig;