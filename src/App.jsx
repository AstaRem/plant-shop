// import { useState } from 'react'

import Header from "./Components/Header"
import Hero from "./Components/Hero"
import TopBanner from "./Components/TopBanner"
import Title from "./Components/Title"

function App() {

  return (
    <>

        <TopBanner />
        <Header />
        <Hero />
        <Title text1='shop' text2='by category' showLink={true}/>

    </>


  )
}

export default App
