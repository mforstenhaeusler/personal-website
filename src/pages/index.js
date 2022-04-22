import Head from 'next/head'
import Image from '../components/Image.js'
import Hero from '../components/hero.js'
import Skills from '../components/skills_hero.js'

export default function Home() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <>
      <Hero prefix={prefix}/>
      <Skills prefix={prefix}></Skills>
    </>
  )
}
