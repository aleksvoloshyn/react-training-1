import { useState, useEffect } from 'react'
import shortid from 'shortid'

const MyFormHook = () => {
  const [email, setEmail] = useState(() =>
    JSON.parse(window.localStorage.getItem('email' ?? 'alex'))
  )
  const [value, setValue] = useState(0)

  useEffect(() => console.log('useEffect'), [value])
  // выполняется каждый раз когда меняются пропы или стейт
  // если есть 2й аргумент массив зависимостей, если пустой [] то
  // только при первом рендере и больше никогда

  useEffect(() => {
    window.localStorage.setItem('email', JSON.stringify(email))
  }, [email])

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const emailId = shortid.generate()

  const changeValue = (e) => {
    switch (e.target.name) {
      case 'increment':
        setValue((v) => v - 10)
        break
      case 'decrement':
        setValue((v) => v + 10)
        break
      default:
        return
    }
  }

  return (
    <>
      <form action="">
        <label htmlFor="{emailId}">
          <span>MAIL : </span>
          <input
            type="email"
            name="enmail"
            value={email}
            onChange={handleEmailChange}
            id={emailId}
          />
        </label>
        <button type="submit">REGISTER</button>
      </form>
      <br />
      <div className="counter">
        <button type="button" name="increment" onClick={changeValue}>
          MINUS 10
        </button>
        <span> {value} </span>
        <button type="button" name="decrement" onClick={changeValue}>
          PLUS 10
        </button>{' '}
        <br />
        <button
          onClick={() => {
            setValue(0)
          }}
        >
          RESET
        </button>
      </div>
    </>
  )
}

export default MyFormHook
