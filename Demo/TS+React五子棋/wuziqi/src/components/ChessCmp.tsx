import React, { useState } from 'react';
import "./ChessCmp.css";
import { ChessType } from "./../types/enums";

interface IProps {
  type:ChessType,
  onClick:()=>void
}

const ChessCmp:React.FC<IProps> = ({ type, onClick }) => {

  let chess = null;

  if(type === ChessType.red) {
    chess = <div className="red item"></div>
  } else if(type === ChessType.blue) {
    chess = <div className="blue item"></div>
  }

  const handleClick = () => {
    if(type === ChessType.none) {
      onClick();
    }
  }

  return (
    <div className="chess" onClick={ () => { handleClick() } }>
      { chess }
    </div>
  )
}

export default ChessCmp;
