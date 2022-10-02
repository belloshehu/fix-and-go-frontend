import React from 'react'
import { Features } from './Features'
import { Footer } from './Footer'
import { Header } from './Header'
import { Hero } from './Hero'
import { Trust } from './Trust'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Trust />
        <Features />
        <Footer />
    </div>
  )
}

export default Home