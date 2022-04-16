import Head from 'next/head'
import Image from '../components/Image.js'
import Hero from '../components/hero.js'
import About from '../components/about.js'

export default function Home() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <>
      <Hero prefix={prefix}/>
      <About />
    </>
  )
}
