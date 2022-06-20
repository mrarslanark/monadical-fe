import React from "react";
import { useParams } from "react-router-dom";

const GameRoom: React.FC<{}> = () => {
  const { roomId, gameId } = useParams();

  return (
    <div>
      <p>Game Room with the following data:</p>
      <p>Room id: {roomId}</p>
      <p>Game id: {gameId}</p>
    </div>
  );
};

export default GameRoom;
