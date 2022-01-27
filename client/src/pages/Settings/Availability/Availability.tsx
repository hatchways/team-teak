import React, { Fragment, useState } from 'react';
import SettingHeader from '../../../components/SettingsHeader/SettingsHeader';
import { Box } from '@mui/system';
import useStyles from './useStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EventNoteSharpIcon from '@mui/icons-material/EventNoteSharp';
import StarIcon from '@mui/icons-material/Star';

import {
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
  styled,
  AppBar,
  Toolbar,
  DialogActions,
  Dialog,
  MenuItem,
} from '@mui/material';
import TimePicker from '@mui/lab/TimePicker';

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
  console.log(checked);

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
      <Box>
        <Button color="info" variant="contained" sx={{ py: 2, borderRadius: 2, ml: 4 }}>
          <EventNoteSharpIcon sx={{ mr: 1 }} />
          Working hours
        </Button>
        <Button variant="outlined" sx={{ py: 2, borderRadius: 50, ml: 5 }}>
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
                        <TextField id="time_click" type="time"></TextField>

                        <Typography>-</Typography>

                        <TextField id="time_click" type="time"></TextField>
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
