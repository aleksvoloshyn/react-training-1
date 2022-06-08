import { useState, useEffect, useRef } from 'react'

const ClockHook = () => {
  const [time, setTime] = useState(() => {
    return new Date()
  })
  // let interval = null

  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(new Date())
  //   }, 1000)
  // })
  let interval = useRef(null)

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime(new Date())
    }, 1000)
  })
  return (
    <>
      <p>
        <b>ТЕКУЩЕЕ ВРЕМЯ : </b> {time.toLocaleDateString()} :{' '}
        {time.toLocaleTimeString()}
      </p>
    </>
  )
}

export default ClockHook
