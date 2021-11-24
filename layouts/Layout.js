import Head from 'next/head'
import NavBar from "./NavBar";
import Footer from "./Footer";

export default ({ children }) => {
    return (
        <>
            <Head>
                <title>Thiago Yure</title>
                <meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0"/>
                <link rel="Icon" href="Thiago-Icone.ico" />
            </Head>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}