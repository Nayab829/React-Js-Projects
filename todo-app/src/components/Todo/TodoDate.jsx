import React, { useEffect, useState } from 'react'

const TodoDate = () => {
  const [dateTime, setDateTime] = useState("")
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const setDate = date.toLocaleDateString();
      const setTime = date.toLocaleTimeString();
      setDateTime(`${setDate} - ${setTime}`)

    }, 1000);
    return () => clearInterval(interval)
  }, []);




  return (
    <>
      <h3>{dateTime}</h3>
    </>
  )
}

export default TodoDate
