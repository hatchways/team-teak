import { Box, Typography } from '@mui/material';
import { flexbox } from '@mui/system';
import { useState, useEffect } from 'react';
import { getStripeProfiles } from '../../../helpers/APICalls/stripeCheckout';
import SettingHeader from '../../SettingsHeader/SettingsHeader';
import PaymentCardDetials from '../PaymentProfile/PaymentProfileCard';
import useStyles from './useStyles';

interface CardDetails {
  _id: string;
  isActive: boolean;
  lastFour: string;
  cardType: string;
  expirelyDate: string;
  name: string;
}

const testCard: CardDetails = {
  _id: '1',
  isActive: true,
  lastFour: '3425',
  cardType: 'smart',
  expirelyDate: '12/24',
  name: 'John Doe',
};

const initailValue: CardDetails[] = [];

const StripeProfiles = (): JSX.Element => {
  const [profiles, setProfiles] = useState(initailValue);

  const classes = useStyles();

  useEffect(() => {
    const getStripeProfileDetails = async () => {
      const result = await getStripeProfiles();

      setProfiles(result.success.data);
    };

    getStripeProfileDetails();
  }, []);

  profiles.push(testCard);

  return (
    <Box>
      <SettingHeader header="Payment Methods" />
      <Typography className={classes.heading}>Saved Payment Profiles</Typography>
      <Box className={classes.wrapper}>
        {profiles.map((item) => (
          <PaymentCardDetials
            key={item._id}
            lastFour={item.lastFour}
            isActive={item.isActive}
            name={item.name}
            cardType={item.cardType}
            expirelyDate={item.expirelyDate}
          />
        ))}
      </Box>
    </Box>
  );
};

export default StripeProfiles;
