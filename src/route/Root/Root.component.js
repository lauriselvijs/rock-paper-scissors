import './Root.style.scss';
import { useSelector } from 'react-redux';
import Header from '../../component/Header';
import Score from '../../component/Score';
import RulesBtn from '../../component/RulesBtn';
import SelectMenu from '../../component/SelectMenu';
import PlayViewWrapper from '../../component/PlayViewWrapper';
import Player from '../../component/Player';
import House from '../../component/House';
import GameResultWrapper from '../../component/GameResultWrapper';
import GameMsg from '../../component/GameMsg';
import PlayAgainBtn from '../../component/PlayAgainBtn';
import MenuViewWrapper from '../../component/MenuViewWrapper';

import { GameScreen } from '../../constant/GameScreen';

const { GAME_SCREEN, MENU_SCREEN } = GameScreen;

function Root() {
  const gameScreen = useSelector((state) => state.gesture.gameScreen);
  const showAnimation = useSelector((state) => state.gesture.showAnimation);

  return (
    <main className="root">
      <Header>
        <Score />
      </Header>
      {gameScreen === MENU_SCREEN && (
        <MenuViewWrapper>
          <SelectMenu />
        </MenuViewWrapper>
      )}
      {gameScreen === GAME_SCREEN && (
        <PlayViewWrapper>
          <Player />
          <GameResultWrapper>
            {showAnimation && (
              <>
                <GameMsg />
                <PlayAgainBtn />
              </>
            )}
          </GameResultWrapper>
          <House />
        </PlayViewWrapper>
      )}
      <RulesBtn />
    </main>
  );
}

export default Root;
