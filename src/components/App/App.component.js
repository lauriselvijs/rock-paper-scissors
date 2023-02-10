import Game from "../Game";
import Author from "../Author";
import { useReloadOnOnline } from "../../hook/Network";

const App = () => {
  useReloadOnOnline();

  return (
    <>
      <main>
        <Game />
      </main>
      <footer>
        <Author />
      </footer>
    </>
  );
};

export default App;
