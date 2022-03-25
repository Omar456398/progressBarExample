let finishBars = () => {
  let innerBars = [...document.getElementsByClassName("innerBar")];
  let percentages = [...document.getElementsByClassName("percentage")];
  innerBars.forEach((item) => {
    item.style.width = "100%";
  });
  percentages.forEach((item) => {
    item.innerText = "100%";
  });
};
