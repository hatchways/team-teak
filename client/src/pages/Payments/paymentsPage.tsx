import { Box } from '@mui/material';

import StripeCharge from '../../components/StripePayment/StripeCheckout/StripeCheckout';
import StripeProfiles from '../../components/StripePayment/StripeProfiles/StripeProfilesWrapper';

const PaymentsPage = (): JSX.Element => {
  return (
    // <SettingHeader header="Payment">
    <Box sx={{ width: '100%', position: 'relative', left: '-30px' }}>
      <StripeProfiles />
      <StripeCharge />
    </Box>

    // </SettingHeader>
  );
};

export default PaymentsPage;
