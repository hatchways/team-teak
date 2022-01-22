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
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import 'date-fns';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { TimePicker } from '@material-ui/pickers';
import { Button, Input, InputAdornment, IconButton, Dialog, DialogActions } from '@material-ui/core';
import AccessTime from '@material-ui/icons/AccessTime';
interface AvailibilityProps {
  header: string;
  // date?(date: Date): string | null;
}
function createData(date: string, value: number, availableTime: { value: string }[]) {
  return { date, value, availableTime };
}
const availableTime = [
  {
    value: '',
  },
  {
    value: '',
  },
];
const rows = [
  createData('SUN', 0, availableTime),
  createData('MON', 1, availableTime),
  createData('TUE', 2, availableTime),
  createData('WED', 3, availableTime),
  createData('THU', 4, availableTime),
  createData('FRI', 5, availableTime),
  createData('SAT', 6, availableTime),
];

const Availability: React.FC<AvailibilityProps> = ({ header }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);

  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('10:10');

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const handleDialogTimeChange = (newValue: any) => {
    const hours = newValue.getHours().toString().padStart(2, '0');
    const minutes = newValue.getMinutes().toString().padStart(2, '0');
    const textValue = hours + ':' + minutes;
    setValue(textValue);
  };
  const handleKeyboardTimeChange = (event: any) => setValue(event.target.value);

  const createDateFromTextValue = (value: any) => {
    const splitParts = value.split(':');
    return new Date(1970, 1, 1, splitParts[0], splitParts[1]);
  };

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

  return (
    <>
      <SettingHeader header={header} />
      <Box
        sx={{
          width: '100%',
          margin: '0 auto',
        }}
      ></Box>

      <Box>
        <TableContainer>
          <Table aria-label="apointment table" className={classes.table}>
            <TableBody>
              {rows.map((row) => (
                <TableRow className={classes.tableRow} key={row.date}>
                  <TableCell sx={{ border: 0 }}>
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox
                          checked={checked.indexOf(row.value) !== -1}
                          onClick={handleToggle(row.value)}
                          edge="start"
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
                        <Input
                          value={value}
                          onChange={handleKeyboardTimeChange}
                          endAdornment={
                            <InputAdornment position="end">
                              {/* <IconButton onClick={openDialog}></IconButton> */}
                            </InputAdornment>
                          }
                        />
                        <Typography sx={{ mx: 3 }}> - </Typography>
                        <Input
                          value={value}
                          onChange={handleKeyboardTimeChange}
                          endAdornment={
                            <InputAdornment position="end">
                              {/* <IconButton onClick={openDialog}></IconButton> */}
                            </InputAdornment>
                          }
                        />
                        <Dialog maxWidth="xs" open={isOpen}>
                          <TimePicker value={createDateFromTextValue(value)} onChange={handleDialogTimeChange} />
                          <DialogActions>
                            <Button onClick={closeDialog} color="primary">
                              Cancel
                            </Button>
                            <Button onClick={closeDialog} color="primary">
                              Ok
                            </Button>
                          </DialogActions>
                        </Dialog>
                        {/* <TextField
                          id="outlined-select-time"
                          select
                          value={endTime}
                          onChange={handleEndTimeChange}
                          fullWidth
                        >
                          {availableTime.map((option) => (
                            // <MenuItem key={option.value} value={option.value}>
                            //   <Typography variant="body1">{option.label}</Typography>
                            // </MenuItem>
                          ))}
                        </TextField> */}
                        <DeleteIcon className={classes.icon} />
                      </Box>
                    ) : (
                      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                        Unavailable
                      </Typography>
                    )}
                    <Box>
                      <AddIcon />
                      <ContentCopyIcon sx={{ mx: 5 }} />
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
