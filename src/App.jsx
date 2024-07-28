import { Header } from './componnents/header/Header'
import { About } from './componnents/about me/About'
import { Skills } from './componnents/skills/Skills'
import { MyProjects } from './componnents/my project/MyProjects'
import { Contact } from './componnents/contact/Contact'
import { Blog } from './componnents/blog/Blog'
import { Footer } from './componnents/footer/Footer'
function App() {
  return (<>
  <Header/>
  <About/>
  <Skills/>
  <MyProjects/>
  <Blog/>
  <Contact/>
  <Footer/>
  </>
  )
}

export default App
