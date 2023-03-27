import Box from "@mui/material/Box";
import grey from "@mui/material/colors/grey";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import update from "immutability-helper";
import { useCallback, useState } from "react";
import { Card } from "./Card";

const DndSectionsContainer = ({ sections, handleIsSelected, moveCard }) => {
  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.label}
        moveCard={moveCard}
        handleIsSelected={handleIsSelected}
        isSelected={card.isSelected}
      />
    );
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ backgroundColor: grey[200], p: 1, m: 1, borderRadius: 2 }}>
        {sections.map((card, i) => renderCard(card, i))}
      </Box>
    </DndProvider>
  );
};

export default DndSectionsContainer;
