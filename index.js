// let playing_area = document.querySelector(".playing-area");
// let playerName = document.getElementById("playerName");
// let button = document.querySelector(".button");
// let individual_boxes = Array.from(document.querySelectorAll(".box"));
// let buttons_clicked = {
//   x: ["", "", "", "", "", "", "", "", ""],
//   0: ["", "", "", "", "", "", "", "", ""],
// };
// function buttonEvent() {
//   button.classList.add("hidden");
//   buttons_clicked.x = ["", "", "", "", "", "", "", "", ""];
//   buttons_clicked["0"] = ["", "", "", "", "", "", "", "", ""];
//   individual_boxes.forEach((item) => {
//     item.textContent = "";
//     item.classList.remove("won");
//   });
// }
// button.addEventListener("click", buttonEvent);
// let xory = true;
// const boxFunction = (value, index) => {
//   addToArray(value, index + 1);
// };

// individual_boxes.forEach((value, index) => {
//   value.addEventListener("click", () => boxFunction(value, index));
// });

// let winning_boxes = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// function addToArray(value, index) {
//   // console.log(buttons_clicked);

//   console.log(`${index} button clicked`);
//   userandvalue = xory ? "x" : "0";
//   buttons_clicked[userandvalue][index - 1] = index;
//   value.textContent = userandvalue;
//   playerName.textContent = `  ${userandvalue}`;
//   xory = !xory;
//   value.classList.add("clicked");
//   let item = checkIfGameIsFinishedOrNot(userandvalue);
//   if (item) {
//     playerName.textContent += " Won";
//     // console.log("Someone won");
//     individual_boxes.forEach((item) => {
//       item.removeEventListener("click", boxFunction);
//     });
//     item.forEach((blocks) => {
//       individual_boxes[blocks - 1].classList.add("won");
//       button.classList.remove("hidden");
//       return;
//     });
//   }
// }

// function checkIfGameIsFinishedOrNot(user) {
//   for (let i = 0; i < winning_boxes.length; i++) {
//     let item = winning_boxes[i];
//     if (
//       buttons_clicked[user][item[0] - 1] &&
//       buttons_clicked[user][item[1] - 1] &&
//       buttons_clicked[user][item[2] - 1]
//     ) {
//       console.log("Match");
//       return item;
//     }
//   }
// }
