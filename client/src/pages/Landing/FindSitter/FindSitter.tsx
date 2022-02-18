import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useStyles } from './useStyles';
import { Grid, Box, Typography, Button, CircularProgress } from '@mui/material';
import FormInput from '../../../components/FormInput/FormInput';

interface Props {
  handleSubmit: (
    {
      where,
      dropIn,
      dropOff,
    }: {
      where: string;
      dropIn: string;
      dropOff: string;
    },
    {
      setStatus,
      setSubmitting,
    }: FormikHelpers<{
      where: string;
      dropIn: string;
      dropOff: string;
    }>,
  ) => void;
}

export default function FindSitter({ handleSubmit }: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        where: '',
        dropIn: '',
        dropOff: '',
      }}
      validationSchema={Yup.object().shape({
        where: Yup.string().required('A location is required'),
        dropIn: Yup.string().required('Drop in time required.'),
        dropOff: Yup.string().required('Drop off time required.'),
      })}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => {
        return (
          <Grid container alignSelf="center" direction="column" sx={{ width: 600 }}>
            <Grid item sx={{ maxWidth: 600 }}>
              <Typography variant="h2" sx={{ fontWeight: 800 }}>
                Find the care your dog deserves
              </Typography>
            </Grid>
            <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
              <Grid item mt={6}>
                <FormInput
                  id="where"
                  label="where"
                  margin="small"
                  type="text"
                  name="where"
                  placeholder="Anywhere"
                  autoFocus
                  value={values.where}
                  helperText={touched.where ? errors.where : ''}
                  onChange={handleChange}
                  style={{ width: 350 }}
                />
                <Grid container direction="row" mt={2}>
                  <Grid item>
                    <FormInput
                      id="dropIn"
                      label="DROP IN / DROP OFF"
                      margin="normal"
                      type="text"
                      name="dropIn"
                      value={values.dropIn}
                      helperText={touched.dropIn ? errors.dropIn : ''}
                      onChange={handleChange}
                      placeholder="mm/dd/yyyy"
                      style={{ maxWidth: 175 }}
                    />
                  </Grid>
                  <Grid item>
                    <FormInput
                      id="dropOff"
                      label=""
                      margin="normal"
                      type="text"
                      name="dropOff"
                      value={values.dropOff}
                      helperText={touched.dropOff ? errors.dropOff : ''}
                      onChange={handleChange}
                      placeholder="mm/dd/yyyy"
                      style={{ maxWidth: 175 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </form>
            <Grid item mt={2}>
              <Button size="large" variant="contained" color="primary" disableElevation className={classes.submit}>
                {isSubmitting ? <CircularProgress style={{ color: 'white' }} /> : 'Find my Dog Sitter'}
              </Button>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
}
