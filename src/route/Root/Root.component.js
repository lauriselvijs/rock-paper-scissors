import React from "react";
import "./Root.style.scss";
import Header from "../../component/Header";
import Score from "../../component/Score";
import RulesBtn from "../../component/RulesBtn";
import SelectMenu from "../../component/SelectMenu";
import PlayViewWrapper from "../../component/PlayViewWrapper";
import Player from "../../component/Player";
import House from "../../component/House";
import GameResultWrapper from "../../component/GameResultWrapper";
import GameMsg from "../../component/GameMsg";
import PlayAgainBtn from "../../component/PlayAgainBtn";
import MenuViewWrapper from "../../component/MenuViewWrapper/MenuViewWrapper.component";

const Root = () => {
  return (
    <main className="root">
      <Header>
        <Score />
      </Header>
      <PlayViewWrapper>
        <Player />
        <GameResultWrapper>
          <GameMsg />
          <PlayAgainBtn />
        </GameResultWrapper>
        <House />
      </PlayViewWrapper>
      {/* <MenuViewWrapper>
        <SelectMenu />
      </MenuViewWrapper> */}
      <RulesBtn />
    </main>
  );
};

export default Root;
