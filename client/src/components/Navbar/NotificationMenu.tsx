import React, { useState, useEffect, Fragment } from 'react';
import { Grid, Menu, ListItemIcon, Badge, MenuItem as DropdownMenuItem, styled, List } from '@mui/material';
import { Logout, Person, Settings } from '@mui/icons-material';
import MenuItem from '@material-ui/core/MenuItem';

import { useStyles } from './useStyles';
import getNotifications from '../../helpers/APICalls/notifications';
import { Notifications } from '../../interface/Notifications';
import { useSnackBar } from '../../context/useSnackbarContext';
import Stack from '@mui/material/Stack';
import Notification from '../Notifications/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Tooltip from '@mui/material/Tooltip';

// type Notifications = NotificationInterface[];

interface NotificationsProps {
  unReadNotifications: string;
}

export const NotificationMenu: React.FC<NotificationsProps> = ({ unReadNotifications }) => {
  const classes = useStyles();
  // const [notifications, setNotifications] = useState<Notifications>([]);
  const { updateSnackBarMessage } = useSnackBar();
  const [isSubmitting, setSubmitting] = useState(false);

  const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setSubmitting(true);

    getNotifications().then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        const notifications = data.success.notifications;
        // setNotifications(notifications);

        // const unreadNotifications = notifications.filter((notification: Notifications) => notification.isRead !== true);

        // setUnreadNotificationCount(unreadNotifications.length);
        setSubmitting(false);
      } else {
        console.error({ data });
        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  }, [updateSnackBarMessage]);

  const unRead = `there have ${unReadNotifications} notifaction`;
  const isRead = `no notifaction`;

  return (
    <Grid xs={2} item>
      <>
        <Tooltip title={unReadNotifications ? unRead : isRead}>
          <Stack spacing={1} direction="row" sx={{ color: 'action.active' }}>
            <Badge color="secondary" badgeContent={unReadNotifications} onClick={handleMenuOpen} showZero>
              <NotificationsActiveIcon />
            </Badge>
          </Stack>
        </Tooltip>
        <Menu
          id="notification-menu"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleMenuClose}
        >
          {/* <List sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper' }}>
            {notifications.map((notification: { isRead: any; user: React.Key | null | undefined }) => {
              if (!notification.isRead) {
                <Fragment key={notification.user}>
                  <Notification notification={notification} />
                </Fragment>;
              }
            })}
          </List> */}
        </Menu>
      </>
    </Grid>
  );
};
