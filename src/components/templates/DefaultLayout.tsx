import React from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import Main from 'components/layouts/Main'
import Footer from 'components/modules/Footer'
import Header from 'components/modules/Header'
import { RootState } from 'stores'
import { FCProps } from 'types/Props'

const DefaultLayout: React.FC<FCProps> = ({ children }) => {
    const currentFontSize = useSelector((state: RootState) => state.font)
    const size = currentFontSize.size

    return (
        <>
            <Head>
                <title>Next.js</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="icon" href="/icon/favicon.ico" />
                <link rel="icon" type="image/png" href="/icon/favicon.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
            </Head>
            <Header />
            <Main>
                <style jsx global>{`
                    html {
                        font-size: ${size === 'lg' ? '93.75%' : size === 'md' ? '78.1%' : '62.5%'};
                    }
                `}</style>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default DefaultLayout
