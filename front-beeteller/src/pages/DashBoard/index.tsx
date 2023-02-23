import CachedIcon from '@mui/icons-material/Cached';
import { Box, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoinCard from '../../components/atoms/CoinCard';
import CoinQuotation from '../../components/atoms/CoinQuotation';
import TopBar from '../../components/atoms/TopBar';
import { useStyles } from './styles';


function DashBoard() {
  const styles = useStyles();
  const navigate = useNavigate()
  const [selectedFilterCoin, setSelectedFilterCoin] = useState('USD')
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
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

  useEffect(() => {
    handleGetDate()
  }, [])




  const handleGetDate = async (values: any, actions: any) => {
    if (data.length === 0) {
      try {
        const response = await axios.get(' https://economia.awesomeapi.com.br/last/USD-BRL,BTC-EUR,BTC-USD')
        const arr = Object.keys(response.data).map(key => {
          return { id: key, ...response.data[key] };
        });
        setData(arr)
        setIsLoading(false)
      }
      catch (err) {
        console.error(err)
        setIsLoading(false)
      }
    }
  }


  console.log(data)


  useEffect(() => {
    localStorage.getItem('token') === null && navigate('/')
  }, [])

  const handleLogout = () => {
    navigate('/')
    localStorage.removeItem('token')
  }

  const enumSimbolCoin = [
    {
      typeCoin: 'USD',
      simbol: '$',
      locale: 'en-IN'
    },
    {
      typeCoin: 'BRL',
      simbol: 'R$',
      locale: 'pt-BR'
    },
    {
      typeCoin: 'EUR',
      simbol: '€',
      locale: 'de-DE'
    },
    {
      typeCoin: 'BTC',
      simbol: '₿'
    }
  ]

  const enumSimbolCoins = (typeCoin) => {
    const simbolCoin = enumSimbolCoin.filter(coin => (coin?.typeCoin === typeCoin))
    console.log(simbolCoin)
    return simbolCoin

  }


  return (
    <Box className={styles.container}>
      <TopBar />
      <Box>
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '38px' }}>
          <span className={styles.coinsHeader}>Moedas</span>
          <CachedIcon onClick={() => handleLogout()} sx={{ color: 'rgba(130, 130, 130, 1)', width: '33px', height: '33px' }} />
        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          {data.map((data, index) => {
            return (
              <Box style={index !== 2 ? { margin: "43px 32px 43px 0px" } : { margin: "43px 0px 43px 0px" }} key={index}>
                <CoinCard
                  typeCoin={data.code}
                  valueInReal={data.bid}
                  nameOfCoin={data.name}
                  codeIn={data.codein}
                  code={data.code}
                  simbolCoin={enumSimbolCoins(data.codein)}
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

export default DashBoard;
