import { Typography, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import useStyles from './useStyles';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SmartCard from '../../../images/paymentProfiles/master.png';
import VisaCard from '../../../images/paymentProfiles/visa.png';
interface Props {
  isActive: boolean;
  lastFour: string;
  cardType: string;
  expirelyDate: string;
  name: string;
}

const PaymentCardDetials = ({ isActive, lastFour, cardType, expirelyDate, name }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.cardWrapper}>
      <Box className={classes.icon}>
        <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} />
      </Box>

      <Typography component="div" className={classes.image}>
        <img src={cardType === 'Visa' ? VisaCard : SmartCard} alt="Master Card" />
      </Typography>
      <Typography className={classes.cardNumber} sx={{ fontSize: '20px', fontWeight: 'bolder', paddingLeft: '20px' }}>
        **** **** **** {lastFour}
      </Typography>
      <Typography className={classes.expirely}>Exp.Date: {expirelyDate}</Typography>
      <Typography sx={{ fontSize: '20px', fontWeight: 'bolder', paddingLeft: '20px' }}>{name}</Typography>
    </Box>
  );
};

export default PaymentCardDetials;
