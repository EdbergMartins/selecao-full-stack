import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import navLogo from '../../../assets/navLogo.svg';
import { useStyles } from './styles';


function TopBar() {
  const styles = useStyles();
  const navigate = useNavigate();

  const handleLogou = () => {
    localStorage.removeItem('token');
    navigate('/')

  }

  return (
    <Box className={styles.topBar}>
      <img className={styles.img} onClick={() => handleLogou()} src={navLogo} alt="Logotipo beeteller" />
      <span style={{ fontWeight: 'bold', fontSize: '18px' }}>
        EN
      </span>
    </Box>)
}

export default TopBar;
