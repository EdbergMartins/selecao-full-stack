import EuroIcon from '@mui/icons-material/Euro';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Skeleton, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import bitCoinSign from '../../../assets/bitCoinSign.svg';
import dollarSign from '../../../assets/dollarSign.svg';
import { useStyles } from './styles';

interface AlertMessageProps {
  typeCoin?: string;
  listCoin?: [];
  isLoading?: boolean
}

function CoinCard({ typeCoin, listCoin, isLoading }: AlertMessageProps) {

  const styles = useStyles();
  const name = listCoin[0]?.name?.split('/')[0]
  const initialDate = listCoin[0]?.create_date.split(' ')[0].split('-').join('/')


  const dateQuote = (date, index) => {
    const milisegonds = Date.parse(initialDate);
    if (index === 0) {
      var data = new Date(milisegonds);
      const day = data.getDate();
      const month = data.getMonth() + 1;
      const year = data.getFullYear();
      return `${day}/${month}/${year}`
    } else {
      const constOldDate = (milisegonds - (1000 * 60 * 60 * 24 * (index + 1)))
      const data = new Date(constOldDate);
      const day = data.getDate();
      const month = data.getMonth() + 1;
      const year = data.getFullYear();
      return `${day}/${month}/${year}`
    }

  }

  const enumTypeCoins = () => {
    if (typeCoin === 'USD-BRL') {
      return (<img style={{ height: '100%', float: 'right' }} src={dollarSign} />)
    } else if (typeCoin === 'BTC-BRL') {
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
      {!isLoading ? 
      <TableBody className={styles.pairCoins}>
        {listCoin.map((data, index) =>
        <TableRow style={{ display: 'flex', flexDirection: 'row' }}>
          <TableCell className={styles.cell} style={{ marginLeft: '32px', maxWidth: '400px' }}>
            <span className={styles.yellowCircles}>
              {enumTypeCoins()}
            </span>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontWeight: 'bold', color: 'black' }}>
                  {name}
              </span>
              <span>
                  {dateQuote(data.timestampm, index)}
              </span>
            </Box>
          </TableCell>
          <TableCell className={styles.cell} style={{ maxWidth: '200px' }}>
            <span className={styles.valueQuote}>
                {data.high}
            </span>
          </TableCell>
          <TableCell className={styles.cell} style={{ maxWidth: '200px' }}>
            <span className={styles.valueQuote}>
                {data.low}
            </span>
          </TableCell>
          <TableCell className={styles.cell} style={{ maxWidth: '330px' }} align="right">
              <span style={data.varBid.includes('-') ? { background: 'rgba(224, 224, 224, 1)' } : { background: 'rgba(244, 194, 59, 1)' }} className={styles.variantQuote}>
                {`${(data.pctChange)}%`}
            </span>
          </TableCell>
        </TableRow>
        )}
        </TableBody>
        :
        new Array(15).fill(0).map((_, index) => {
          return (
            <Box style={{ display: 'flex' }} className={styles.pairCoins} key={index}>
              <Skeleton variant="circular" width={70} height={70} />
              <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Skeleton width="100px" height='40px' />
                <Skeleton width="100px" height='30px' />
              </Box>
              <Box style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                <Skeleton width="100px" height='40px' style={{ marginLeft: '22%' }} />
                <Skeleton width="100px" height='40px' style={{ marginLeft: '22%' }} />
                <Skeleton width="100px" height='40px' style={{ marginLeft: '22%' }} />
              </Box>
            </Box>)
        })
      }
    </>
  );


}

export default CoinCard;