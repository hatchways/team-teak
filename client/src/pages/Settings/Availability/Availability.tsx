import React, { Fragment, useState, useContext } from 'react';
import SettingHeader from '../../../components/SettingsHeader/SettingsHeader';
import { Box } from '@mui/system';
import useStyles from './makeStyles';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EventNoteSharpIcon from '@mui/icons-material/EventNoteSharp';
import StarIcon from '@mui/icons-material/Star';
import { SnackBarContext } from '../../../context/useSnackbarContext';
import { AuthContext } from '../../../context/useAuthContext';
import { schedules } from './schedules';

import {
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Checkbox,
  ListItemButton,
  Typography,
  Button,
  InputAdornment,
  Input,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem as DropdownMenuItem,
} from '@mui/material';

interface AvailibilityProps {
  header: string;
}

function availabilityList(date: string, value: number) {
  return { date, value };
}

const rows = [
  availabilityList('SUN', 0),
  availabilityList('MON', 1),
  availabilityList('TUE', 2),
  availabilityList('WED', 3),
  availabilityList('THU', 4),
  availabilityList('FRI', 5),
  availabilityList('SAT', 6),
];

const Availability: React.FC<AvailibilityProps> = ({ header }) => {
  const classes = useStyles();
  const [checked, checkForAvailability] = React.useState([1]);
  const { updateSnackBarMessage } = useContext(SnackBarContext);
  const { loggedInUser } = useContext(AuthContext);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');
  const [updating, setUpdating] = useState(false);

  const updateAvailability = (newTime: string, param: string) => {
    if (param === 'start') {
      setStartTime(newTime);
    } else {
      setEndTime(newTime);
    }
    setUpdating(true);
  };

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    checkForAvailability(newChecked);
  };

  return (
    <>
      <SettingHeader header={header} />

      <Box sx={{ m: 3 }}>
        <Button
          color="info"
          variant="contained"
          sx={{
            py: 2,
            borderRadius: 2,
            ml: 4,
            margin: 1,
            width: {
              xs: 200,
              sm: 180,
            },
          }}
        >
          <EventNoteSharpIcon sx={{ mr: 1 }} />
          Working hours
        </Button>
        <Button
          variant="outlined"
          sx={{
            py: 2,
            borderRadius: 50,
            ml: 5,
            margin: 1,
            width: {
              xs: 200,
              sm: 180,
            },
          }}
        >
          <AddIcon sx={{ mr: 1 }} /> New schedule
        </Button>
      </Box>
      <Box sx={{ m: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          Working hours
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <StarIcon sx={{ color: 'yellow', mr: 1 }} />
          <Typography variant="body1" color="text.secondary" display="inline-block">
            default schedule
          </Typography>
        </Box>
      </Box>
      <Box>
        <TableContainer>
          <Table aria-label="simple table" className={classes.table}>
            <TableBody>
              <TableRow>
                <Typography variant="h5" sx={{ fontWeight: 700, m: 4 }}>
                  Set your weekly hours
                </Typography>
              </TableRow>
              {rows.map((row) => (
                <TableRow className={classes.tableRow} key={row.date}>
                  <TableCell sx={{ border: 0 }}>
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          checked={checked.indexOf(row.value) !== -1}
                          onClick={handleToggle(row.value)}
                          tabIndex={-1}
                          disableRipple
                        />
                      </ListItemIcon>
                      <ListItemText primary={<Typography sx={{ fontWeight: 700 }}>{row.date}</Typography>} />
                    </ListItemButton>
                  </TableCell>
                  <TableCell sx={{ display: 'flex', border: 0, alignItems: 'center', justifyContent: 'space-between' }}>
                    {checked.includes(row.value) ? (
                      <Box sx={{ display: 'flex', border: 0, alignItems: 'center', justifyContent: 'center' }}>
                        <Select
                          className={classes.selectAvailableTime}
                          variant="outlined"
                          name="startTime"
                          value={startTime}
                          onChange={(e) => updateAvailability(e.target.value, 'start')}
                        >
                          <MenuItem value={-1} disabled></MenuItem>
                          {schedules.map((schedule) => (
                            <MenuItem value={schedule.value} key={schedule.value}>
                              {schedule.time}
                            </MenuItem>
                          ))}
                        </Select>

                        <Typography> - </Typography>

                        <Select
                          className={classes.selectAvailableTime}
                          variant="outlined"
                          name="endTime"
                          value={endTime}
                          onChange={(e) => updateAvailability(e.target.value, 'end')}
                        >
                          <MenuItem value={-1} disabled></MenuItem>
                          {schedules.map((schedule) => (
                            <MenuItem value={schedule.value} key={schedule.value}>
                              {schedule.time}
                            </MenuItem>
                          ))}
                        </Select>
                        <DeleteIcon className={classes.icon} />
                      </Box>
                    ) : (
                      <Typography variant="body1" color="text.secondary">
                        Unavailable
                      </Typography>
                    )}
                    <Box>
                      <AddIcon />
                      <ContentCopyIcon sx={{ mx: 3 }} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Availability;
