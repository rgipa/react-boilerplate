import React from 'react'

import { useState } from 'react'

const Local = (props) => {
  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    const updatedCount = count + 1
    setCount(updatedCount)
  }

  return (
    <div>
      <p>Count will increase by 1 each time increment is clicked</p>
      Count Value: {count}
      <br />
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  )
}

export default Local
