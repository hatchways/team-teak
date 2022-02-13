import * as React from 'react';
import { Box, CircularProgress, Grid, Link, Divider, Typography } from '@mui/material';
import { NavLink, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import PageContainer from '../../../components/PageContainer/PageContainer';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Chip from '@mui/material/Chip';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabBox from '../../../components/TabBox/TabBox';
import CustomBookingPreview from '../../../components/CustomBookingPreview/CustomBookingPreview';

import { useAuth } from '../../../context/useAuthContext';
import CustomBooking from './CustomBookingForm/CustomBooking';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import useStyles from './makeStyles';
import PropTypes from 'prop-types';
import CustomBookingMockData from '../../../mockData/CustomBookingMockData';
import { TicketList } from '../../Settings/CustomBooking/TicketList/TicketList';
import useArray from 'react-use-array';
import { useMount } from 'react-use';

const allStatus = ['all', ...new Set(CustomBookingMockData.map((item) => item.status))];

interface formValues {
  paymentMethodRadio: any;
}

//////////////////////////////////////////////////////////////////    /////////////////////

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

///////////////////////////////////////////

//////////////////////////////////////////////////////////////////

export default function CustomBookingList(): JSX.Element {
  const [tabValue, setTabValue] = React.useState(0);
  const [petSitterName, setPetSitterName] = React.useState('Jennifer Lawrence');
  const [petSitterDescription, setpetSitterDescription] = React.useState('Most popular dog-sitter');
  const [petSitterRate, setpetSitterRate] = React.useState(22);
  const [petSitterPhoto, setpetSitterPhoto] = React.useState(
    'https://pyxis.nymag.com/v1/imgs/cdd/4c7/65257dcae8272f7aff667d0bf255e5bd02-27-Jennifer-Lawrence-dog.rhorizontal.w700.jpg',
  );
  const [bookingHours, setBookingHours] = React.useState(4);
  const [mockData, setMockData] = React.useState(CustomBookingMockData);
  const [filterStatusList, setFilterStatusList] = React.useState([]);

  const [paymentStatus, setPaymentStatus] = React.useState('Current');

  const platformFee = 5;
  const amount = bookingHours * petSitterRate;
  const invoiceTotal = platformFee + amount;
  const cards = ['VISA - 1234', 'MASTERCARD - 1234', 'AMEX - 1234'];
  const defaultCard = 'AMEX - 1234';

  const { loggedInUser, profile } = useAuth();
  const history = useHistory();
  const classes = useStyles();
  const currentRoute = useHistory().location.pathname.toLowerCase();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser || !profile) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  /////////////////////////////////////////////////////////////////////////////////

  const handleChangeTabs = (event: never, newValue: never) => {
    setTabValue(newValue);
  };

  const switchStatus = (status: any) => {
    if (status === 'all') {
      setMockData(CustomBookingMockData);
      return;
    }

    console.log(' ====== ');

    const eachStatus = CustomBookingMockData.filter((item) => item.status === status);
    setMockData(eachStatus);
  };

  // const BookingPreview = (
  //   name: string,
  //   photo: string,
  //   start: Date,
  //   end: Date,
  //   description: string,
  //   hours: number,
  //   rate: number,
  //   status: string,
  // ) => {
  //   const formatDate = (date: Date) => {
  //     return [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('/');
  //   };

  //   const startDate = new Date(start);
  //   const endDate = new Date(end);

  //   return (
  //     <Box
  //       sx={{ paddingBottom: '1rem', '&:hover': { backgroundColor: '#eee' } }}
  //       onClick={() => {
  //         setPetSitterName(name);
  //         setpetSitterDescription(description);
  //         setpetSitterRate(rate);
  //         setpetSitterPhoto(photo);
  //         setBookingHours(hours);
  //         setPaymentStatus(status);
  //       }}
  //     >
  //       <Typography sx={{ fontSize: '20px', fontWeight: 500, paddingLeft: '0.5rem' }}>{name}</Typography>
  //       <Typography sx={{ fontSize: '15px', paddingLeft: '0.5rem' }}>{`${formatDate(startDate)} - ${formatDate(
  //         endDate,
  //       )}`}</Typography>
  //     </Box>
  //   );
  // };

  return (
    <PageContainer>
      <Grid sx={{ width: '95%', margin: '0 auto' }} container>
        <Grid xs={12} sm={3} item>
          <Box
            sx={{
              width: '95%',
              height: '100%',
              padding: '20px',
              backgroundColor: '#fff',
            }}
          >
            <Grid item>
              <Box sx={{ borderColor: 'divider' }}>
                {/* <Tabs
                  scrollButtons={false}
                  value={tabValue}
                  aria-label="outlined button group"
                  onChange={() => {
                    handleChangeTabs;
                  }}
                >
                  <Tab label="Current" />
                  <Tab label="Past-Due" />
                  <Tab label="Paid" />
                </Tabs> */}
                <ButtonGroup variant="contained" size="large" className="btngrp" color="primary" fullWidth={true}>
                  <Button
                    className="filter-btn"
                    onClick={() => {
                      setMockData(CustomBookingMockData);
                    }}
                  >
                    Current
                  </Button>
                  <Button className="filter-btn" onClick={() => switchStatus('past-due')}>
                    Past-Due
                  </Button>
                  <Button className="filter-btn" onClick={() => switchStatus('paid')}>
                    Paid
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>

            <Box sx={{ mt: '2rem' }} />

            <Divider />

            <Box sx={{ mt: '2rem' }} />

            <TicketList
              tickListProp={{
                ticketLists: [],
              }}
            />

            {/* <TabPanel value={tabValue} index={0}>
              <Box maxHeight="600px" sx={{ marginBottom: '1rem', overflowY: 'scroll' }}>
                {currentTicketList.map((item: any) => (
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
                      {item.hours}
                    </Link>
                  </Box>
                ))}
              </Box>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <Box maxHeight="600px" sx={{ marginBottom: '1rem', overflowY: 'scroll' }}>
                {pastDueTicketList.map((item: any) => (
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
                      {item.hours}
                    </Link>
                  </Box>
                ))}
              </Box>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <Box maxHeight="600px" sx={{ marginBottom: '1rem', overflowY: 'scroll' }}>
                {paidTicketList.map((item: any) => (
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
                      {item.hours}
                    </Link>
                  </Box>
                ))}
              </Box>
            </TabPanel> */}
          </Box>
        </Grid>
        <Grid xs={12} sm={9} item>
          <CustomBooking header="Customer Booking" />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
