import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Redirect } from 'react-router-dom';
import PaymentMethod from '../../helpers/APICalls/paymentMethods';
import SettingHeader from '../SettingsHeader/SettingsHeader';

const PaymentMethods = (): JSX.Element => {
  const createPaymentProfile = async () => {
    console.log('Am called');

    const result = await PaymentMethod();

    console.log(result);
    // console.log(result);

    // <Redirect to={`${result.url}`} />;
    window.location.href = result.url;
  };

  return (
    <Box>
      <SettingHeader header="Payment Methods" />

      <Button
        variant="outlined"
        sx={{ padding: '20px', fontWeight: 'bold' }}
        onClick={() => {
          createPaymentProfile();
        }}
      >
        Add new payment profile
      </Button>
    </Box>
  );
};

export default PaymentMethods;
