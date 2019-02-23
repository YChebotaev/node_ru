/* global ym */

import React from "react";
import { Button } from "reactstrap";

export const GoToChat = () => {
  const onClick = () => {
    ym(51894734, "reachGoal", "GOTO_CHAT");
  };

  return (
    <div className="text-center">
      <Button
        color="primary"
        size="lg"
        tag="a"
        href="tg://resolve?domain=node_ru"
        onClick={onClick}
      >
        Перейти к сообществу
      </Button>
    </div>
  );
};
