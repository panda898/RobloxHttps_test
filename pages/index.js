import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">

      <main>
        <Header title="" />
        <p className="description">
        test <code>lol<code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

