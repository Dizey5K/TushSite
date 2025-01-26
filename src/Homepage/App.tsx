import './App.scss'
import { ContainerFirst } from './modules/ContainerFirst'
import ContainerGallery from './modules/ContainerGallery'
import ContainerSale from './modules/ContainerSale'
import { ContainerSecond } from './modules/ContainerSecond'
import { Navbar } from './modules/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <ContainerFirst/>
      <ContainerSecond/>
      <ContainerGallery/>
      <ContainerSale/>
    </>
  )
}

export default App
