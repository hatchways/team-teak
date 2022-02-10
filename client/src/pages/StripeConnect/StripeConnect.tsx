import { Box, Button } from '@mui/material';
import SettingHeader from '../../components/SettingsHeader/SettingsHeader';
import stripeConnect from '../../helpers/APICalls/stripeConnect';

const StripeConnect = (): JSX.Element => {
  const createStripeAccount = async () => {
    await stripeConnect();
  };

  return (
    <>
      <SettingHeader header="Payment Methods" />
      <Box sx={{ width: '100%', position: 'relative', left: '-30px' }}>
        <Button
          variant="outlined"
          sx={{ padding: '20px', fontWeight: 'bold' }}
          onClick={() => {
            createStripeAccount();
          }}
        >
          Stripe Connect
        </Button>
      </Box>
    </>
  );
};

export default StripeConnect;