import { useRef, useState, useEffect } from 'react'

const NoFirstRender = () => {
  const isFirstRender = useRef(true)
  const [data, setData] = useState(0)
  const [click, setClick] = useState(0)

  useEffect(() => {
    if (isFirstRender.current) {
      console.log('FIRST RENDER')
      isFirstRender.current = false
      return
    }
    console.log('USE EFFFFFFFFFF')
    setData(11)
  }, [click])
  return (
    <>
      NoFirstRender : {data}{' '}
      <button
        onClick={() => {
          setClick((c) => {
            return c + 1
          })
        }}
      >
        {click} +
      </button>
    </>
  )
}

export default NoFirstRender
