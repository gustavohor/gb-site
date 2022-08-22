import {theme} from '@/config/theme';
import Home from '@/pages/Home';
import {ThemeProvider} from 'styled-components';
import GlobalFonts from './global/globalFonts';
import GlobalStyles from './global/globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
