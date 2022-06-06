import './App.css'
import { Main } from './Main'
import { Footer } from './Footer'
import { Title } from './Title'
import { ClassCmp } from './ClassCmp'

const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>this is h2 in header</h2>
      </header>
      <Main books={favouriteBooks}>
        <Title />
        <Title title="children title, styled with styled-components" />
        these are the children
        <ClassCmp />
      </Main>
      <Footer name="footer" />
    </div>
  )
}

export default App
