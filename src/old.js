const closeButton = document.createElement("button");
// position the close button top corner
closeButton.style = `
  position: fixed;
  z-index: 10000;
  top: 35px;
  right: 35px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #e25656;
`;
// attach click event to the close button
closeButton.addEventListener("click", async () => {
  // remove the button on close
  closeButton.remove();
  // remove the display style so the original content is displayed right

  cardClone.style.removeProperty("display");
  cardClone.style.removeProperty("padding");
  // show original card content
  [...cardClone.children].forEach((child) =>
    child.style.removeProperty("display")
  );
  fadeContent(cardClone, "0");
  // shrink the card back to the original position and size
  await toggleExpansion(
    cardClone,
    {
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
    },
    300
  );
  // show the original card again
  card.style.removeProperty("opacity");
  // remove the clone card
  cardClone.remove();
});
