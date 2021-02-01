import React, { useState } from 'react';
import "./App.css"
import BoardCmp from "./components/BoardCmp"
import { ChessType } from './types/enums';


const App:React.FC = () => {

  const typeArr:ChessType[] = [
    ChessType.none,
    ChessType.none,
    ChessType.none,
    ChessType.none,
    ChessType.none,
    ChessType.none,
    ChessType.none,
    ChessType.none,
    ChessType.none,
  ];

  return (
    <div className="box">
      <BoardCmp chessesArr={ typeArr }></BoardCmp>
    </div>
  )
}

export default App;
