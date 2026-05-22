import Hero from './components/Hero'
import Estudios from './components/Estudios'
import Stack from './components/Stack'
import Experiencia from './components/Experiencia'
import Proyectos from './components/Proyectos'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Estudios />
        <Stack />
        <Experiencia />
        <Proyectos />
      </main>
    </>
  )
}
