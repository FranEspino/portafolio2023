import Head from "next/head";
import Banner from "../src/components/Banner/Banner";
import About from "../src/components/About/About";
import Experience from '../src/components/Experience/Experience';

const Home = () => {
  
  return (
    <>
      <Head>
        <title>Fraporitmos</title>
        <meta name="description" content="Hola soy Fran Espino, desarrollador de software, entra y conoce más de mi. 😁" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/frapoteam/image/upload/v1639420834/f_cpqlrh.png" />
        <meta property="og:image" content="https://res.cloudinary.com/frapoteam/image/upload/v1639419333/fran_iox6kl.png" />
        <meta property="og:image:secure_url" content="https://res.cloudinary.com/frapoteam/image/upload/v1639419333/fran_iox6kl.png" />
      </Head>
         <Banner />
         <About />
         <Experience/>

        
    </>
  );
};
export default Home;
