import React, { useState, useRef } from "react";

const DraggableCardList = () => {
  const [cards, setCards] = useState([
    { id: 1, text: "Card 1" },
    { id: 2, text: "Card 2" },
    { id: 3, text: "Card 3" },
    { id: 4, text: "Card 4" },
  ]);

  const [draggedCard, setDraggedCard] = useState(null);
  const cardPositions = useRef([]); // Store initial positions of the cards

  const handleDragStart = (e, index) => {
    setDraggedCard(index);
    e.target.style.opacity = "0.5"; // Visual cue for dragging
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (index === draggedCard) return;

    const updatedCards = [...cards];
    const draggedItem = updatedCards[draggedCard];

    // Remove dragged item from the original position and insert at new position
    updatedCards.splice(draggedCard, 1);
    updatedCards.splice(index, 0, draggedItem);

    setDraggedCard(index);
    setCards(updatedCards);
  };

  const handleDrop = (e) => {
    e.target.style.opacity = "1"; // Reset opacity after dropping
    setDraggedCard(null);
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
    setDraggedCard(null);
  };

  // Render the list of cards with drag-and-drop behavior and position animations
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <div
          key={card.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={handleDrop}
          onDragEnd={handleDragEnd}
          ref={(el) => (cardPositions.current[index] = el)} // Store element references for position calculations
          className="card"
          style={{
            padding: "20px",
            border: "1px solid black",
            marginBottom: "8px",
            backgroundColor: index === draggedCard ? "#f0f0f0" : "white",
            cursor: "grab",
            transition: "transform 0.3s ease", // Smooth animation for transform
            transform:
              draggedCard !== null && index === draggedCard
                ? "scale(1.05)"
                : "translateY(0)", // Animate dragged item
          }}
        >
          {card.text}
        </div>
      ))}
    </div>
  );
};

export default DraggableCardList;
