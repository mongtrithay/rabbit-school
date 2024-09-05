import './App.css'
import ButtonDonate from './companents/ButtonDonate'
import ButtonReadMore from './companents/ButtonReadMore'
import ButtonTranslate from './companents/ButtonTranslate'
import Footer from './companents/Footer'
import logo from "./images/logo.png"



function App() {

  return (
    <>
      <ButtonDonate />
      <ButtonReadMore />
      <ButtonTranslate />
      <section className=' w-full'>
        <Footer />
        <img src={logo} alt="logo" className='ml-[5rem] mt-[3rem]' />
      </section>
    </>
  )
}

export default App
