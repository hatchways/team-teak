import { Box, Typography } from '@mui/material';
import PageContainer from '../../components/PageContainer/PageContainer';

import dogNotFound from '../../images/notFound/dog_not_found.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  image: {
    width: '100%',
  },
});

interface Props {
  message: string;
}

export default function NotFound({ message }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <PageContainer>
      <Box sx={{ width: '100%', margin: '0 auto', textAlign: 'center' }}>
        <Typography
          sx={{
            color: 'primary.main',
            textAlign: 'center',
          }}
          variant="h2"
        >
          {message}
        </Typography>
        <Box sx={{ width: '100%', margin: '20px auto' }}>
          <img className={classes.image} src={dogNotFound} />
        </Box>
      </Box>
    </PageContainer>
  );
}
