import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles(() => ({
  container: {
    minHeight: 'calc(100% - 68px)',
    maxWidth: '100%',
    margin: '0 auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    bakcground: 'white',
    fontFamily: 'Roboto',
    background: 'rgba(236, 246, 255, 0.3);',
  },
  pairCoins: {
    height: '189px',
    maxWidth: '369px',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
  },
  yellowCircles: {
    height: '64px',
    width: '64px',
    left: '257px',
    top: '0px',
    borderRadius: '99px',
    padding: '20px',
    background: 'yellow'

  }
}));
