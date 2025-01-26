import './App.scss'
import ContainerBottom from './modules/ContainerBottom'
import ContainerContact from './modules/ContainerContact'
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
      <ContainerContact/>
      <ContainerBottom/>
    </>
  )
}

export default App
