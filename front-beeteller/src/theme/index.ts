import { createTheme } from '@mui/material/styles';
import defaultTheme from './defaultTheme';
import baseConfig from './baseConfig';

const theme = createTheme(
  {
    typography: {
      allVariants: {
        fontFamily: 'Nunito'
      }
    }
  },
  baseConfig,
  defaultTheme
);

export default theme;
