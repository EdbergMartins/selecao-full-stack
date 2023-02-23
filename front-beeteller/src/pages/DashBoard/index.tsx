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
  const [selectedFilterCoin, setSelectedFilterCoin] = useState('USD-BRL')
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [listPerDay, setListPerday] = useState([])
  const currencyQuoteList = [
    {
      value: 'USD-BRL',
      name: 'Dolar Americano'
    },
    {
      value: 'EUR-BRL',
      name: 'Euro'
    },
    {
      value: 'BTC-BRL',
      name: 'Bitcoin'
    }
  ]

  useEffect(() => {
    handleGetDate()
    handleGetList()
  }, [selectedFilterCoin])




  const handleGetDate = async (values: any, actions: any) => {
    setIsLoading(true)
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


  const handleGetList = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(`https://economia.awesomeapi.com.br/json/daily/${selectedFilterCoin}/15`)
      const arr = Object.keys(response.data).map(key => {
        return { id: key, ...response.data[key] };
      });
      setListPerday(arr)
      setIsLoading(false)
    }
    catch (err) {
      console.error(err)
      setIsLoading(false)
    }
  }




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
    return simbolCoin

  }

  console.log(selectedFilterCoin)

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
                  isLoading={isLoading}
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
          listCoin={listPerDay}
        />
      </Box>
    </Box>
  );
}

export default DashBoard;
