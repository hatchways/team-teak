import * as React from 'react';
import { Box, CircularProgress, Grid, Link, Divider, Typography } from '@mui/material';
import { NavLink, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Chip from '@mui/material/Chip';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useStyles from '../makeStyles';
import CustomBookingMockData from '../../../../mockData/CustomBookingMockData';
import { useEffect, useState } from 'react';

import { CustomBooking } from '../../../../interface/CustomBooking';

interface ITickListProp {
  tickListProp: TickeetListDataPropType;
}

type TickeetListDataPropType = {
  ticketLists: TickeetListPropType[];
};

type TickeetListPropType = {
  name: string;
  description?: string; // set to optional but always passed in from settings
  photo?: string;
  start: Date;
  end: Date;
  hours: number;
  rate: number;
  status: string;
};

export const TicketList = (props: ITickListProp) => {
  const { ticketLists } = props.tickListProp;
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(0);

  // const [param, setParam] = useState({
  //   name: '',
  //   personId: '',
  // });
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   fetch('').then(async (res) => {
  //     if (res.ok) {
  //       setList(await res.json());
  //     }
  //   });
  // }, [param]);

  const handleChangeTabs = (event: never, newValue: never) => {
    setTabValue(newValue);
  };

  return (
    <Box maxHeight="600px" sx={{ marginBottom: '1rem', overflowY: 'scroll' }}>
      {ticketLists.map((item) => {
        <Box
          sx={{
            margin: '5px 0',
            border: 'solid black 1px',
            backgroundColor: '#A9A9A9',
            height: '100px',
          }}
          key={item.photo}
        >
          <Link
            sx={{
              fontSize: 20,
              color: '#fff',
              textDecoration: 'none',
              '&:hover': {
                color: '#000',
              },
            }}
            component={NavLink}
            activeClassName={classes.activeLink}
            to={item.name}
          >
            {item.description}
            {item.rate}
          </Link>
        </Box>;
      })}
    </Box>
  );
};
