import React, { Fragment, useState } from 'react';
import SettingHeader from '../../../components/SettingsHeader/SettingsHeader';
import { Box } from '@mui/system';
import { ListItemText, Typography } from '@mui/material';
import useStyles from './useStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import 'date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface AvailibilityProps {
  header: string;
  // date?(date: Date): string | null;
}
function createData(date: string, value: number, availableTime: { value: string; label: string }[]) {
  return { date, value, availableTime };
}
const availableTime = [
  {
    value: '10 am',
    label: '10 am',
  },
  {
    value: '11 am',
    label: '11 am',
  },
  {
    value: '12 pm',
    label: '12 pm',
  },
  {
    value: '1 pm',
    label: '1 pm',
  },
  {
    value: '2 pm',
    label: '2 pm',
  },
  {
    value: '3 pm',
    label: '3 pm',
  },
  {
    value: '4 pm',
    label: '4 pm',
  },
  {
    value: '5 pm',
    label: '5 pm',
  },
  {
    value: '6 pm',
    label: '6 pm',
  },
  {
    value: '7 pm',
    label: '7 pm',
  },
  {
    value: '8 pm',
    label: '8 pm',
  },
  {
    value: '9 pm',
    label: '9 pm',
  },
  {
    value: '10 pm',
    label: '10 pm',
  },
];
const rows = [
  createData(',Monday', 0, availableTime),
  createData(',Tuesday', 1, availableTime),
  createData(',Wednesday', 2, availableTime),
  createData(',Thursday', 3, availableTime),
  createData(',Friday', 4, availableTime),
  createData(',Saturday', 5, availableTime),
  createData(',Sunday', 6, availableTime),
];

const Availability: React.FC<AvailibilityProps> = ({ header }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [handleDateChange] = useState<MaterialUiPickersDate | null>(new Date());
  const [date, setDate] = React.useState<Date | null>(new Date());
  const [value, setValue] = React.useState(0);

  // const handleDateChange = (date?: MaterialUiPickersDate, value?: string | null | undefined) => {
  //   console.log(date);
  //   setSelectedDate(date);
  // };
  console.log(checked);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 0);
    }

    setChecked(newChecked);
  };

  const [startTime, setStartTime] = React.useState('10 am');
  const [endTime, setEndtTime] = React.useState('10 pm');

  const handleStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(event.target.value);
  };
  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndtTime(event.target.value);
  };
  return (
    <>
      <SettingHeader header={header} />
      <Box
        sx={{
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* <Button variant="contained" sx={{ py: 2, borderRadius: 2, ml: 4 }}>
          <LocalActivityIcon sx={{ mr: 2 }} />
          Working hours
        </Button>
        <Button variant="outlined" sx={{ py: 2, borderRadius: 16, ml: 5 }}>
          <AddIcon sx={{ mr: 2 }} /> New schedule
        </Button> */}
      </Box>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <Box>
        <TableContainer>
          <Table aria-label="apointment table" className={classes.table}>
            <TableBody>
              {rows.map((row) => (
                <TableRow className={classes.tableRow} key={row.date}>
                  <TableCell sx={{ border: 0 }}>
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        {/* <Checkbox
                          checked={checked.indexOf(row.value) !== -1}
                          onClick={handleToggle(row.value)}
                          edge="start"
                          tabIndex={-1}
                          disableRipple
                        /> */}

                        <FormControl>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="monday"
                            name="radio-buttons-group"
                            onClick={handleToggle(row.value)}
                            tabIndex={-1}
                          >
                            <FormControlLabel value="other" control={<Radio />} label="" />
                          </RadioGroup>
                        </FormControl>
                      </ListItemIcon>
                      <ListItemText primary={<Typography sx={{ fontWeight: 700 }}>{row.date}</Typography>} />
                    </ListItemButton>
                  </TableCell>
                  <TableCell sx={{ display: 'flex', border: 0, alignItems: 'center', justifyContent: 'space-between' }}>
                    {checked.includes(row.value) ? (
                      <Box sx={{ display: 'flex', border: 0, alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ mx: 3 }}> FROM </Typography>
                        <TextField
                          id="outlined-select-time"
                          select
                          value={startTime}
                          onChange={handleStartTimeChange}
                          fullWidth
                        >
                          {availableTime.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              <Typography variant="body1">{option.label}</Typography>
                            </MenuItem>
                          ))}
                        </TextField>
                        <Typography sx={{ mx: 3 }}> TO </Typography>

                        <TextField
                          id="outlined-select-time"
                          select
                          value={endTime}
                          onChange={handleEndTimeChange}
                          fullWidth
                        >
                          {availableTime.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              <Typography variant="body1">{option.label}</Typography>
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>
                    ) : (
                      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                        Unavailable
                      </Typography>
                    )}
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
