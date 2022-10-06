import 'styles/globals.scss'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { MuiTheme } from 'providers/MuiTheme'
import { UserProvider } from 'providers/UserProvider'
import { store } from 'stores'

const persistor = persistStore(store)

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, viewport-fit=cover"
                />
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(d) {
                                var config = {
                                    kitId: 'xxxxxx',
                                    scriptTimeout: 3000,
                                    async: true
                                },
                                h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
                            })(document);
                        `,
                    }}
                /> */}
            </Head>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ThemeProvider theme={MuiTheme}>
                        <UserProvider>
                            <Component {...pageProps} />
                        </UserProvider>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </>
    )
}

export default MyApp
