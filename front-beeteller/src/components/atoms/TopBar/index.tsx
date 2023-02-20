import { Box } from '@mui/material';
import navLogo from '../../../assets/navLogo.svg';
import { useStyles } from './styles';


function TopBar() {
  const styles = useStyles();


  return (
    <Box className={styles.topBar}>
      <img src={navLogo} alt="Logotipo beeteller" />
      <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
        EN
      </span>
    </Box>)
}

export default TopBar;
