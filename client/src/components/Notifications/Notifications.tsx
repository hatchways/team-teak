import React, { useEffect, useState } from 'react';
import { Grid, Link, Popper, Badge } from '@mui/material';
import NotificaitonContent from '../NotificationContent/NotificationContent';
import { fetctAllUnreadNotications, markNotificationsAsRead } from '../../helpers/APICalls/getNotifications';
import { Notifications, NotificationsApiData } from '../../interface/Notifications';
import { useSnackBar } from '../../context/useSnackbarContext';
import { useAuth } from '../../context/useAuthContext';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { User } from '../../interface/User';

// interface NotificationsProps {
//   unReadNotifications: string;
// }

const Notificaitons = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [unReadNotification, setUnReadNotification] = useState<Notifications[] | undefined>();
  const [notificationsApiData, setnotificationsApiData] = useState<NotificationsApiData[] | undefined>();

  const { updateSnackBarMessage } = useSnackBar();
  const { updateLoginContext } = useAuth();

  const { loggedInUser, profile, notifications, logout } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);

    console.log(' )))))ppppp ' + loggedInUser?.email);
    console.log(' )))))ppppp ' + notifications?.description);

    markNotificationsAsRead(`${profile?.userId}`);
    if (anchorEl) {
      setUnReadNotification([]);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'notification' : undefined;

  useEffect(() => {
    const fetchUnReadData = async () => {
      const getData = await fetctAllUnreadNotications();
      console.log(' ============777 ' + getData);

      if (getData.error) {
        updateSnackBarMessage(getData.error.message);
      }
      setUnReadNotification(getData.success?.notifications);
    };
    fetchUnReadData();
  }, [updateSnackBarMessage]);

  console.log(' ============ ' + markNotificationsAsRead);

  console.log(' ============ ' + unReadNotification);

  return (
    <Grid sx={{ textAlign: 'center' }} xs={2} justifySelf="flex-end" item>
      <Link
        sx={{
          color: '#212121',
          fontWeight: 700,
          textDecoration: 'none',
          transition: 'color 120ms ease-in-out',
          '&:hover': {
            color: 'primary.main',
          },
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {unReadNotification === undefined || unReadNotification === null || unReadNotification?.length === 0 ? (
          <Badge color="secondary" badgeContent={unReadNotification} showZero>
            <NotificationsActiveIcon />
          </Badge>
        ) : (
          <>
            <Badge color="secondary" badgeContent={unReadNotification} showZero>
              <NotificationsActiveIcon />
            </Badge>
            <FiberManualRecordIcon sx={{ color: '#64dd17', fontSize: 14, pb: '3px' }} />
          </>
        )}
      </Link>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <NotificaitonContent unReadNotification={unReadNotification} />
      </Popper>
    </Grid>
  );
};

export default Notificaitons;
