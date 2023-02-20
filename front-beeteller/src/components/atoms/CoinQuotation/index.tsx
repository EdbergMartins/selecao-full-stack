import EuroIcon from '@mui/icons-material/Euro';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
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
      return (<EuroIcon sx={{ fill: 'black' }} />)
    }

  }

  return (
    <>
      <TableHead>
        <TableRow style={{ marginTop: '47px', display: 'flex' }}>
          <TableCell className={styles.cell} style={{ marginLeft: '40px', maxWidth: '400px' }}>
            Moeda
          </TableCell>
          <TableCell className={styles.cell} style={{ maxWidth: '200px' }} align="left">
            <span>
              Mínima
            </span>
            <KeyboardArrowDownIcon className={styles.arrowFilter} />
          </TableCell>
          <TableCell className={styles.cell} style={{ maxWidth: '200px' }} align="left">
            Máxima
            <KeyboardArrowDownIcon className={styles.arrowFilter} />
          </TableCell>
          <TableCell className={styles.cell} style={{ maxWidth: '330px' }} align="right">
            <KeyboardArrowDownIcon className={styles.arrowFilter} />
            Variação
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={styles.pairCoins}>
        <TableRow style={{ display: 'flex', flexDirection: 'row' }}>
          <TableCell className={styles.cell} style={{ marginLeft: '32px', maxWidth: '400px' }}>
            <span className={styles.yellowCircles}>
              {enumTypeCoins()}
            </span>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontWeight: 'bold', color: 'black' }}>
                Dolar Americano
              </span>
              <span>
                10/01/2021
              </span>
            </Box>
          </TableCell>
          <TableCell className={styles.cell} style={{ maxWidth: '200px' }}>
            <span className={styles.valueQuote}>
              5.5461
            </span>
          </TableCell>
          <TableCell className={styles.cell} style={{ maxWidth: '200px' }}>
            <span className={styles.valueQuote}>
              5.5461
            </span>
          </TableCell>
          <TableCell className={styles.cell} style={{ maxWidth: '330px' }} align="right">
            <span className={styles.variantQuote}>
              + 1%
            </span>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );


}

export default CoinCard;