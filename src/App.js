import Score from "./component/Score";
import Game from "./component/Game";
import Author from "./component/Author/Author.component";

function App() {
  return (
    <>
      <header>
        <Score />
      </header>
      <main>
        <Game />
      </main>
      <footer>
        <Author />
      </footer>
    </>
  );
}

export default App;
