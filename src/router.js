import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Users from '@/components/Users'
import Favourites from '@/components/Favourites'

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