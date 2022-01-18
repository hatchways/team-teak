import { Component } from 'react';
import BookingPage from '../BookingPage/BookingPage';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { AccountType } from '../../types/AccountType';
import NotFound from '../NotFound/NotFound';

const menuItems = [
  {
    item: 'Login',
    resource: '/login',
    canView: null,
    authenticated: false,
    component: Login,
  },
  {
    item: 'Sign up',
    resource: '/signup',
    canView: null,
    authenticated: false,
    component: SignUp,
  },
  {
    item: 'Become a Sitter',
    resource: '/dashboard',
    canView: [AccountType.PET_OWNER],
    authenticated: true,
    component: Dashboard,
  },
  {
    item: 'Become a sitter',
    resource: '/signup?accountType=pet_sitter',
    canView: [AccountType.PET_OWNER, AccountType.PET_SITTER],
    authenticated: false,
    component: SignUp,
  },
  {
    item: 'My Jobs',
    resource: '/my-jobs',
    canView: [AccountType.PET_SITTER],
    authenticated: true,
    component: NotFound,
  },
  {
    item: 'My Sitters',
    resource: '/sitters',
    canView: [AccountType.PET_OWNER],
    authenticated: true,
    component: NotFound,
  },
  {
    item: 'Messages',
    resource: '/messages',
    canView: [AccountType.PET_SITTER, AccountType.PET_OWNER],
    authenticated: true,
    component: NotFound,
  },
  {
    item: 'Manage Bookings',
    resource: '/bookings',
    canView: [AccountType.PET_SITTER, AccountType.PET_OWNER],
    authenticated: true,
    component: BookingPage,
  },
];

export const getAllRoutes = () => menuItems;

// export const getPetSitterRoutes = () => {
//   const result = [];
//   for (const item of menuItems) {
//     if (item.canView?.length === 2) {
//       result.push(item);
//       continue;
//     } else {
//       if (item.canView[0] === 'pet_sitter') {
//         result.push(item);
//         continue;
//       }
//     }
//   }
//   return result;
// };

// export const getPetOwnerRoutes = () => {
//   const result = [];
//   for (const item of menuItems) {
//     if (item.canView?.length === 2) {
//       result.push(item);
//       continue;
//     } else {
//       if (item.canView[0] === 'pet_owner') {
//         result.push(item);
//         continue;
//       }
//     }
//   }
//   return result;
// };

export const getNonAuthenticatedRoutes = () => {
  const result = [];

  for (const item of menuItems) {
    if (!item.authenticated) result.push(item);
  }
  return result;
};
