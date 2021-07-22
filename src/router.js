import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Users from '@/views/Users'
import Favourites from '@/views/Favourites'

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites
  },
];

export default new VueRouter({routes});