import './App.scss'
import { ContainerFirst } from './modules/ContainerFirst'
import { ContainerSecond } from './modules/ContainerSecond'
import { Navbar } from './modules/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <ContainerFirst/>
      <ContainerSecond/>
    </>
  )
}

export default App
