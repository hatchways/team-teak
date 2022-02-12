import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import { CircularProgress, Grid, Typography } from '@mui/material';
import PageContainer from '../../components/PageContainer/PageContainer';
import socketIOClient from 'socket.io-client';

export default function Dashboard(): JSX.Element {
  const [response, setResponse] = useState('');
  const { loggedInUser } = useAuth();
  const { initSocket } = useSocket();
  const history = useHistory();

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3000');
    socket.on('connection', (data) => {
      setResponse(data);
    });
    socket.disconnect();
  }, []);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3000');
    socket.on('disconnect', (data) => {
      setResponse('');
    });
  }, []);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    return <CircularProgress />;
  }

  return (
    <PageContainer>
      <Grid container>
        <Grid xs={12} item>
          <Typography sx={{ textAlign: 'center' }} variant="h4">
            Search Profiles
          </Typography>
        </Grid>
      </Grid>
    </PageContainer>
  );
}
