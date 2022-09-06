// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => < Iconify icon = { name }
width = { 22 }
height = { 22 }
/>;

const navConfig = [{
        title: 'Apply for a land title',
        path: '/applicant/apply',
        icon: getIcon('eva:pie-chart-2-fill'),
    },
    {
        title: 'Issued Titles', // user
        path: '/applicant/titles',
        icon: getIcon('eva:people-fill'),
    },
    {
        title: 'Progress',
        path: '/applicant/progress', // blog
        icon: getIcon('eva:pie-chart-2-fill'),
    },
];

export default navConfig;