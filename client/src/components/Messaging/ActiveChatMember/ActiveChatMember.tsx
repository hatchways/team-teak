import { Typography, Box } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useStyles } from './useStyles';

const ActiveChatMember = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      <Box className={classes.image}>
        <img src="https://cdn.pixabay.com/photo/2021/09/12/18/07/robin-6619184_960_720.jpg" alt="Image" />
        <p className={classes.online}></p>
      </Box>
      <Box className={classes.content}>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Marry Wills</Typography>
      </Box>
      <Box className={classes.icon}>
        <MoreHorizIcon fontSize="large" />
      </Box>
    </Box>
  );
};

export default ActiveChatMember;
