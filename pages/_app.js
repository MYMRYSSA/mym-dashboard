import '../styles/globals.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, StyledEngineProvider } from '@material-ui/core';
import NavigationScroll from '../layout/NavigationScroll';

// defaultTheme
import theme from '../themes';

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme({})}>
                <CssBaseline />
                <NavigationScroll>{getLayout(<Component {...pageProps} />)}</NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default MyApp;
