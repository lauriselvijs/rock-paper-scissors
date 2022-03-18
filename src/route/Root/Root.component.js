import React from "react";
import "./Root.style.scss";
import Header from "../../component/Header";
import Score from "../../component/Score";
import RulesBtn from "../../component/RulesBtn";
import SelectMenu from "../../component/SelectMenu";
import PlayView from "../../component/PlayView/PlayView.component";

const Root = () => {
  return (
    <main className="root">
      <Header>
        <Score />
      </Header>
      {/* <SelectMenu /> */}
      <PlayView />
      <RulesBtn />
    </main>
  );
};

export default Root;
