import styles from './Main.module.css'

// ИНЛАЙН СТИЛИ
const listStyles = {
  listStyle: 'none',
  backgroundColor: 'salmon',
}

const Main = ({ children, books }) => {
  return (
    <main>
      <h2 className={styles.mainColor}>Main section</h2>
      {children}
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ ...listStyles, color: 'blue' }}>
              {/* {book.name[0] === 'R' && book.name} */}
              {book.name[0] === 'R' ? book.name : 'ПЕРВАЯ БУКВА НЕ R'}
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export { Main }
