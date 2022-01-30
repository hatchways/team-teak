import BookingPage from '../BookingPage/BookingPage';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { AccountType } from '../../types/AccountType';
import NotFound from '../NotFound/NotFound';
import { useAuth } from '../../context/useAuthContext';

const { profile } = useAuth();

const menuItems = [
  {
    item: 'Login',
    resource: '/login',
    canView: [AccountType.PET_OWNER, AccountType.PET_SITTER],
    authenticated: false,
    component: Login,
  },
  {
    item: 'Sign up',
    resource: '/signup',
    canView: [AccountType.PET_OWNER, AccountType.PET_SITTER],
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

export const getRoutesAccordingToAccountType = () => {
  const { accountType } = profile;
  let routes = [];
  for (const route of menuItems) {
    if (route.canView?.length > 1) {
      routes.push(route);
    } else if (accountType === route.canView[0]) {
      routes.push(route);
    } else continue;
  }

  return routes;
};
