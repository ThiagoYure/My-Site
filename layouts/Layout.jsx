import Head from 'next/head'
import HeaderCustom from '../components/HeaderCustom'
import FooterCustom from '../components/FooterCustom';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Thiago Yure - Portfólio artístico</title>
                <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0"/>
                <meta name="description" content="Aqui você encontra informações sobre mim e interage 
                com um site criado 100% por mim. Desde o design, a arte e a programação. "/>
                <meta charSet="UTF-8"/>
                <link rel="Icon" href="/images/icone.ico" />
            </Head>
            <HeaderCustom/>
            {children}
            <FooterCustom/>
        </>
    );
}