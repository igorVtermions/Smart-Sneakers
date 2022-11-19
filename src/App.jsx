import { GlobalStyle } from "./global/globalStyle";
import { RouterBrowser } from "./router/Router";
import { AuthProvider } from "./contexts/auth";


export function App() {

  return( 
  <AuthProvider>
    <GlobalStyle />
    <RouterBrowser />
  </AuthProvider>
  )
}
