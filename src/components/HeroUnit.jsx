import React from "react";
import { Container } from "reactstrap";
import { Logo } from "./Logo";
import { MembersCount } from "./MembersCount";

import "./HeroUnit.css";

export const HeroUnit = () => {
  return (
    <div className="HeroUnit">
      <Container>
        <div className="HeroUnit__first_line">
          <Logo />
          <MembersCount />
          <h1 className="HeroUnit__title">Node_Ru</h1>
        </div>
        <div className="HeroUnit__second_line">
          <p>Русскоязычное сообщество Node разработчиков в telegram</p>
        </div>
      </Container>
    </div>
  );
};
