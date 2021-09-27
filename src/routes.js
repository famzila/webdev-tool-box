import Angular from 'views/Angular';
import Codingpause from 'views/Codingpause';
import Css from 'views/Css';
import Git from 'views/Git';
import Home from 'views/Home.js';
import Html from 'views/Html';
import JavaScript from 'views/JavaScript';
import Reactjs from 'views/Reactjs';
import Vuejs from 'views/Vuejs';

var routes = [
  {
    path: '/home',
    name: 'Home',
    rtlName: 'لوحة القيادة',
    icon: 'tim-icons icon-istanbul',
    component: Home,
    layout: '/front',
  },
  {
    path: '/javascript',
    name: 'JavaScript',
    rtlName: 'الرموز',
    icon: 'fab fa-js',
    component: JavaScript,
    layout: '/front',
  },
  {
    path: '/react',
    name: 'React',
    rtlName: 'الرموز',
    icon: 'tim-icons icon-atom',
    component: Reactjs,
    layout: '/front',
  },
  {
    path: '/angular',
    name: 'Angular',
    rtlName: 'الرموز',
    icon: 'fab fa-angular',
    component: Angular,
    layout: '/front',
  },
  {
    path: '/vue',
    name: 'VueJS',
    rtlName: 'الرموز',
    icon: 'fab fa-vuejs',
    component: Vuejs,
    layout: '/front',
  },
  {
    path: '/html',
    name: 'HTML',
    rtlName: 'خرائط',
    icon: 'fab fa-html5',
    component: Html,
    layout: '/front',
  },
  {
    path: '/css',
    name: 'CSS',
    rtlName: 'إخطارات',
    icon: 'fab fa-css3',
    component: Css,
    layout: '/front',
  },
  {
    path: '/git',
    name: 'Git',
    rtlName: 'ملف تعريفي للمستخدم',
    icon: 'fab fa-github',
    component: Git,
    layout: '/front',
  },
  {
    path: '/coding-pause',
    name: 'Coding pause',
    rtlName: 'قائمة الجدول',
    icon: 'fas fa-laugh-squint',
    component: Codingpause,
    layout: '/front',
  },
];
export default routes;
