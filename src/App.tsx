import { Footer, Header, Hero, Main, MainContent } from './components'

export default function App() {
  return (
    <Main className='bg-white font-red-hat-display flex flex-col overflow-hidden'>
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </Main>
  )
}