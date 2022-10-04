import {theme} from '@/config/theme';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {ThemeProvider} from 'styled-components';
import GlobalFonts from './global/globalFonts';
import GlobalStyles from './global/globalStyles';
import Routes from './router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyles />
      <Navbar />
      <Routes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
