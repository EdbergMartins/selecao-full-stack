import CachedIcon from '@mui/icons-material/Cached';
import { Box } from '@mui/material';
import { useStyles } from './styles';


function HomePage() {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <div>
        <div>
          <span>Moedas</span>
          <CachedIcon />
        </div>
        <div className={styles.pairCoins}>
          <div>
            <span>BRL/USD</span>
            <span className={styles.yellowCircles}></span>
          </div>

        </div>
        <div>

        </div>
      </div>

      <div>
      </div>
    </Box>
  );
}

export default HomePage;
