import Avatar from '@mui/material/Avatar';
import { User } from '../../interface/User';

interface Props {
  loggedIn: boolean;
  user: User;
}

const AvatarDisplay = ({ user }: Props): JSX.Element => {
  console.log('avatar display here');
  return <Avatar alt="Profile Image" src={`https://robohash.org/${user.email}.png`} />;
};

export default AvatarDisplay;
