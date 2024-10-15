import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CookieConsent from "@/components/CookieConsent";
import getLPTheme from "@/data/getLPTheme";
const LPtheme = createTheme(getLPTheme("light"));
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={LPtheme}>
      <Component {...pageProps} />
      <CookieConsent />
    </ThemeProvider>
  );
}
