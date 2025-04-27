const buttonE1 = document.getElementById("roll-button");
const diceE1 = document.getElementById("dice");
const rollHistoryE1 = document.getElementById("roll-history"); // Fixed variable name

let historylist = [];

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1; // Get number from 1-6
    const diceFace = getDiceFace(rollResult); // Get Unicode face
    diceE1.innerHTML = diceFace; // Update dice face

    historylist.push(rollResult); // Store in history
    updateRollHistory(); // Update history display
}

function updateRollHistory() {
    rollHistoryE1.innerHTML = ""; // Clear old history

    for (let i = 0; i < historylist.length; i++) { // Fixed loop condition
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historylist[i])}</span>`;
        rollHistoryE1.appendChild(listItem); // Fixed appendChild
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1: return "&#9856;"; // ⚀
        case 2: return "&#9857;"; // ⚁
        case 3: return "&#9858;"; // ⚂
        case 4: return "&#9859;"; // ⚃
        case 5: return "&#9860;"; // ⚄
        case 6: return "&#9861;"; // ⚅
        default: return "";
    }
}

buttonE1.addEventListener("click", () => {
    diceE1.classList.add("roll-animation");

    setTimeout(() => {
        diceE1.classList.remove("roll-animation");
        rollDice(); // Fixed function call
    }, 1000);
});



