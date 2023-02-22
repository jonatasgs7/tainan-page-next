import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Header } from '@/layout/Header'
import { About } from '@/layout/About'
import { Socials } from '@/layout/Socials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tainan Gaspar - Social Media, Marketing Digital e Design</title>
        <meta name="description" content="Aprimoro sua presença online de forma exclusiva e personalizada ao perfil da sua empresa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#CAB693" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tainangaspar.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tainan Gaspar - Social Media, Marketing Digital e Design" />
        <meta property="og:image" content="https://tainangaspar.com.br/assets/img/image_tainan_gaspar.png" />
        <meta property="og:url" content="https://tainangaspar.com.br/" />
        <link rel="icon" href="/assets/img/favicon-tainan.png" />
      </Head>
      
      <Header />

      <div className={styles.main}>
        <div className={styles.module_text}>
          <About />
        </div>
        <div className={styles.module_socials}>
          <Socials />
        </div>
      </div>

    </>
  )
}
