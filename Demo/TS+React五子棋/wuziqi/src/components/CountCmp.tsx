import React from 'react'

interface Iprops {
  num: number
  handleChange:(num:number)=>void
}

const CountCmp:React.FC<Iprops> = ({ num, handleChange }) => {

  const handleJian = (val:number) => {
    handleChange(num + val)
  }

  return (
    <div>
      <button onClick={ () => handleJian(-1) }>-</button>
      <p>{ num }</p>
      <button onClick={ () => handleJian(1) }>+</button>
    </div>
  )
}

export default CountCmp;
