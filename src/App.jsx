import './App.css'
import ButtonDonate from './companents/ButtonDonate'
import ButtonReadMore from './companents/ButtonReadMore'
import ButtonTranslate from './companents/ButtonTranslate'
import Footer from './companents/Footer'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'



function App() {

  return (
    <>
      <ButtonDonate />
      <ButtonReadMore />
      <ButtonTranslate />
      <section className=' w-full'>
        <Footer />
      </section>
    </>
  )
}

export default App
