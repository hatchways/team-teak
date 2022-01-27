import React, { ReactElement } from 'react';
import NotificationInterface from '../../../interface/Notification';
import moment from 'moment';
import { Divider, ListItemText, ListItem, Avatar, Typography, ListItemAvatar } from '@mui/material';
import { useStyles } from './useStyles';
import { NavLink } from 'react-router-dom';

interface NotificationProps {
  notification: NotificationInterface;
}

export default function Notification({ notification }: NotificationProps): ReactElement {
  const classes = useStyles(notification);

  return (
    <ListItem
      className={classes.root}
      key={notification.type}
      component={NavLink}
      to={`/messages/${notification.type}`}
      alignItems="flex-start"
    >
      <ListItemAvatar>
        <Avatar alt="change this later to users name" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={`${notification.title}`}
        secondary={
          <React.Fragment>
            <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
              {`${notification.description}`}
              <Divider />
              {`${moment(notification.createdOn).format('MM-DD-YYYY')}`}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
