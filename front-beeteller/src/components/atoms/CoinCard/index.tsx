import EuroIcon from '@mui/icons-material/Euro';
import { Box, Typography } from '@mui/material';
import bitCoinSign from '../../../assets/bitCoinSign.svg';
import dollarSign from '../../../assets/dollarSign.svg';
import { useStyles } from './styles';

interface AlertMessageProps {
  typeCoin?: string;
  valueInReal?: string;
  nameOfCoin?: string;
}

function CoinCard({ typeCoin, valueInReal, nameOfCoin }: AlertMessageProps) {

  const styles = useStyles();

  const enumTypeCoins = () => {
    if (typeCoin === 'USD') {
      return (<img style={{ height: '100%', float: 'right' }} src={dollarSign} />)
    } else if (typeCoin === 'BTC') {
      return (<img style={{ height: '100%', float: 'right' }} src={bitCoinSign} />)
    } else {
      return (<EuroIcon />)
    }

  }

  return (
    <Box className={styles.pairCoins}>
      <Box className={styles.contentPair}>
        <Typography>BRL/USD</Typography>
        <span className={styles.yellowCircles}>
          {enumTypeCoins()}
        </span>
      </Box>
      <Box style={{ display: 'flex', position: 'absolute', top: '62px', alignItems: 'center' }}>
        <span className={styles.typeReal}>
          R$
        </span>
        <span className={styles.realValue}>
          {valueInReal}
        </span>
      </Box>
      <Box className={styles.nameOfCoin}>
        {nameOfCoin}
      </Box>
    </Box>
  );


}

export default CoinCard;