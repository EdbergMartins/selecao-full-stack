import CachedIcon from '@mui/icons-material/Cached';
import { Box, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import CoinCard from '../../components/atoms/CoinCard';
import CoinQuotation from '../../components/atoms/CoinQuotation';
import { useStyles } from './styles';


function HomePage() {
  const styles = useStyles(); 
  const [selectedFilterCoin, setSelectedFilterCoin] = useState('USD')
  const currencyQuoteList = [
    {
      value: 'USD',
      name: 'Dolar Americano'
    },
    {
      value: 'EUR',
      name: 'Euro'
    },
    {
      value: 'BTC',
      name: 'Bitcoin'
    }
  ]

  return (
    <Box className={styles.container}>
      <Box>
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className={styles.coinsHeader}>Moedas</span>
          <CachedIcon sx={{ color: 'rgba(130, 130, 130, 1)', width: '33px', height: '33px' }} />
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          {new Array(3).fill(0).map((_, index) => {
            return (
              <Box style={index !== 2 ? { margin: "43px 32px 43px 0px" } : { margin: "43px 0px 43px 0px" }} key={index}>
                <CoinCard
                  typeCoin='USD'
                  valueInReal='5,20'
                  nameOfCoin='Dolar Turismo'
                />
              </Box>
            )
          })}
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: ' space-between' }}>
          <span className={styles.coinsHeader}>
            Cotações
          </span>
          <Select style={{ width: '190px', height: '40px' }} labelId="label" id="select" value={selectedFilterCoin}>
            {currencyQuoteList.map(({ value, name }, index) => (
              <MenuItem
                key={index}
                value={value}
                onClick={(event) => setSelectedFilterCoin(event.target.dataset.value)}
                className={styles.selectName}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      <Box>
        <CoinQuotation
          typeCoin={selectedFilterCoin}
        />
      </Box>
    </Box>
  );
}

export default HomePage;
