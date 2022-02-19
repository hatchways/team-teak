import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Field } from 'formik';
import { DisplaySettingsOutlined } from '@mui/icons-material';

const HoursSetting = () => {
  const display = [];
  for (let i = 1; i <= 24; i++) {
    const listHour = <MenuItem value={i}>{`${i}:00`}</MenuItem>;
    display.push(listHour);
  }
  return display;
};

const GeneerateSchedules = (eachDay: string, bookSchedules: any, setFieldValue: any, handleSubmit: any) => (
  <Grid
    container
    columns={3}
    sx={{
      height: '5.5rem',
      display: 'flex',
      opactiy: bookSchedules[eachDay].active ? 1 : 0.4,
      borderBottom: 1,
      borderColor: '#dbdbdb',
    }}
  >
    <FormGroup sx={{ margin: 'auto', width: '25%' }}>
      <FormControlLabel
        control={
          <Field
            id={`${eachDay}.active`}
            name={`${eachDay}.active`}
            checked={bookSchedules[eachDay].active}
            onChange={(e: any) => {
              if (!e.target.checked) {
                setFieldValue(`${eachDay}.startTime`, '0');
                setFieldValue(`${eachDay}.endTime`, '0');
              } else {
                setFieldValue(`${eachDay}.startTime`, '10');
                setFieldValue(`${eachDay}.endTime`, '22');
              }
              setFieldValue(`${eachDay}.active`, e.target.checked);
              handleSubmit();
            }}
            type="checkbox"
            component={Checkbox}
          />
        }
        label={<Typography sx={{ fontSize: '15px' }}>{eachDay}</Typography>}
      />
    </FormGroup>

    <FormControlLabel
      labelPlacement="start"
      control={
        <Field
          id={`${eachDay}.startTime`}
          name={`${eachDay}.startTime`}
          type="time"
          onChange={(e: any) => {
            if (bookSchedules[eachDay].active) {
              const number = e.target.value;
              if (number == '23') {
                setFieldValue(`${eachDay}.endTime`, '0');
              } else if (number >= parseInt(bookSchedules[eachDay].endTime)) {
                setFieldValue(`${eachDay}.endTime`, (parseInt(number) + 1).toString());
              }
              setFieldValue(`${eachDay}.startTime`, number);
              handleSubmit();
            }
          }}
          sx={{ width: '100px', height: '30px', mr: 10 }}
          MenuProps={{
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          }}
          as={Select}
        >
          {HoursSetting()}
        </Field>
      }
      label={
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        >
          FROM
        </Typography>
      }
      sx={{ fontSize: '25px', fontWeight: 700, width: '35%' }}
    />

    <FormControlLabel
      labelPlacement="start"
      control={
        <Field
          id={`${eachDay}.endTime`}
          name={`${eachDay}.endTime`}
          type="time"
          onChange={(e: any) => {
            if (bookSchedules[eachDay].active) {
              const number = e.target.value;
              if (number == '23') {
                setFieldValue(`${eachDay}.endTime`, '0');
              } else if (number >= parseInt(bookSchedules[eachDay].endTime)) {
                setFieldValue(`${eachDay}.endTime`, (parseInt(number) + 1).toString());
              }
              setFieldValue(`${eachDay}.endTime`, number);
              handleSubmit();
            }
          }}
          sx={{ width: '100px', height: '30px', mr: 10 }}
          MenuProps={{
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right',
            },
          }}
          as={Select}
        >
          {HoursSetting()}
        </Field>
      }
      label={
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        >
          TO
        </Typography>
      }
      sx={{ fontSize: '25px', fontWeight: 700, width: '35%' }}
    />
  </Grid>
);

const schedules = (scheduleName: string): JSX.Element => {
  return (
    <MenuItem key={scheduleName} value={scheduleName}>
      {scheduleName}
    </MenuItem>
  );
};

export default GeneerateSchedules;
