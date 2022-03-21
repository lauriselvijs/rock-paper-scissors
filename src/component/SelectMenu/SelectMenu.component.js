import React from "react";
import triangle from "../../asset/images/bg-triangle.svg";
import paper from "../../asset/images/paper.svg";
import scissors from "../../asset/images/scissors.svg";
import rock from "../../asset/images/rock.svg";
import "./SelectMenu.style.scss";

const SelectMenu = () => {
  return (
    <section className="select-menu">
      <img src={triangle} alt="Triangle" className="triangle" />
      <img src={paper} alt="Paper" className="paper" />
      <img src={scissors} alt="Scissor" className="scissors" />
      <img src={rock} alt="Rock" className="rock" />
    </section>
  );
};

export default SelectMenu;
