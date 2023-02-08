import Game from "../Game";
import Author from "../Author";
import { useReloadOnOnline } from "../../hook/Online/Online.hook";

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
