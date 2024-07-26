import React from 'react'
import { Navbar, Rank, TrailerVideo, BigButton, Footer } from './components'
import { Header, NotesSet, InterList } from './containers'

const App = () => {
  return (
    <div className="app mt-[5px] max-sm:mt-[15px] bg-whiteGray duration-700">
      <Navbar />
      <Header />
      <Rank />
      <NotesSet />
      <TrailerVideo />
      <InterList />
      <BigButton />
      <Footer />
    </div>
  )
}

export default App
