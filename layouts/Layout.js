import Head from 'next/head'
import NavBar from "./NavBar";
import Footer from "./Footer";

export default ({ children }) => {
    return (
        <>
            <Head>
                <title>Thiago Yure</title>
                <meta name="description" content="That's Thiago's site" />
                <link rel="Icon" href="Thiago-Icone.ico" />
            </Head>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}