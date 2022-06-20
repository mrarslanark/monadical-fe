import GameRoom from "pages/GameRoom";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import { routes } from "shared";

const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.PLAY} element={<GameRoom />} />
    </Routes>
  );
};

export default App;
