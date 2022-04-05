import React from 'react'
import {CardHolder} from './Component/Card/CardHolder'
import {Header} from './Component/Header/Header'
import {Hero} from './Component/Hero/Hero'
import {SectionPhone} from './Component/SectionPhone/SectionPhone'
import  {SectionHealth} from './Component/SectionHealth/SectionHealth'
import { CardHolder2 } from './Component/Card/CardHolder2'
import {Personalized} from './Component/Footer/Personalized'
import {Footer} from './Component/Footer/Footer'
import GlobalStyle from './GlobalStyle'

export const App = () => {
  return (
    <div>
       {/* <GlobalStyle/> */}
       <Header/>
       <Hero/>
      <CardHolder/>
      <SectionPhone/>
      <SectionHealth/>
      <CardHolder2/>
      <Personalized/>
      <Footer/>

      </div>
  )
}

export default App