import BookingPage from '../BookingPage/BookingPage';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { AccountType } from '../../types/AccountType';
import NotFound from '../NotFound/NotFound';
import Settings from '../Settings/Settings';
import CustomBookingList from 'pages/Settings/CustomBooking/CustomBookingList';

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
    resource: '/my-jobs',
    canView: [AccountType.PET_SITTER, AccountType.PET_OWNER],
    authenticated: true,
    component: BookingPage,
  },
  {
    item: 'Custom Booking',
    resource: '/custom/booking',
    canView: [AccountType.PET_SITTER, AccountType.PET_OWNER],
    authenticated: true,
    component: CustomBookingList,
  },
];

export const getAllRoutes = () => menuItems;

export const getRoutesAccordingToAccountType = (accountType: string) => {
  const routes = [];
  for (const route of menuItems) {
    if (!route.canView) {
      routes.push(route);
    } else if (route.canView?.includes(accountType)) {
      routes.push(route);
    }
  }

  return routes;
};
