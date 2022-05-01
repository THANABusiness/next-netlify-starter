import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>THANA Business</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to THANA Business" />
        <div>
          <iframe width="100%" style="height: 100vh" src="https://THANABUSINESS.NETLIFY.APP" frameborder="0"></iframe>
        </div>
      </main>

      <Footer />
    </div>
  )
}
