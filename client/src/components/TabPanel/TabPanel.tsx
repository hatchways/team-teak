import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import { loginWithDemo } from '../../helpers/APICalls/login';
import useStyles from '../../pages/Login/LoginForm/useStyles';
import CustomBookingMockData from '../../mockData/CustomBookingMockData';
import * as React from 'react';

// function TabPanel(props: any) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

////////////////////////////////
interface Props {
  children: string;
  index: number;
  value: number;
}
const TabPanel = ({ children, index, value }: Props): JSX.Element => {
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const classes = useStyles();
  const [mockData, setMockData] = React.useState(CustomBookingMockData);

  const switchStatus = (status: any) => {
    if (status === 'all') {
      setMockData(CustomBookingMockData);
      return;
    }

    const eachStatus = CustomBookingMockData.filter((item) => item.status === status);
    setMockData(eachStatus);
  };

  /////////

  const handleLoginDemoUser = () => {
    loginWithDemo().then((data) => {
      if (data.error) {
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    // <div
    //   role="tabpanel"
    //   hidden={value !== index}
    //   id={`simple-tabpanel-${index}`}
    //   aria-labelledby={`simple-tab-${index}`}
    // >
    //   {value === index && (
    //     <Box sx={{ p: 3 }}>
    //       <Typography>{children}</Typography>
    //     </Box>
    //   )}
    // </div>
    <>
      <Button className="filter-btn" onClick={() => switchStatus('current')}>
        current
      </Button>
      <Button className="filter-btn" onClick={() => switchStatus('past-due')}>
        past-due
      </Button>
      <Button className="filter-btn" onClick={() => switchStatus('paid')}>
        paid
      </Button>
    </>
  );
};

export default TabPanel;
