import React from 'react'
import { ChessType } from '../types/enums';
import ChessCmp from "./ChessCmp";
import "./BoardCmp.css"

interface IProps {
  chessesArr: ChessType[]
}

const BoardCmp:React.FC<IProps> = ({ chessesArr }) => {

  const handleClick = () => {
    console.log("1");
  }

  const list = chessesArr.map((item, index) => {
    return (
      <ChessCmp type={ item } key={ index } onClick={ handleClick }></ChessCmp>
    )
  });

  console.log(list);
  

  return (
    <div className="board">
      { list }
    </div>
  )
}
export default BoardCmp;