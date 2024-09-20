import { Table } from "./components/table";
function start(twoPlayerOpt) {
    partido = new Table(twoPlayerOpt); // 2/4 Players
    const buttonsDiv = document.createElement("div");
    buttonsDiv.id = "Botones";
    for (let i = 0; i < 5; i++) {
        const button = document.createElement("button");
        button.textContent = `Botón ${i}: `;
        button.addEventListener("click", () => {
            console.log(`${button.textContent} presionado!`);
        });
        AppDiv.appendChild(button);
    }
    StartButton.remove();
}
// Main
let partido;
let players;
let twoPlayer;
const AppDiv = document.getElementById("app");
let menu = document.createElement("div");
AppDiv.appendChild(menu);
let StartButton = document.createElement("input");
;
StartButton.type = "button";
StartButton.value = "Start";
menu.appendChild(StartButton);
// Radio Buttons
let labelPlayers = document.createElement("legend");
labelPlayers.textContent = "¿Cuántos Jugadores?";
menu.appendChild(labelPlayers);
let radioButtonDiv = document.createElement("div");
menu.appendChild(radioButtonDiv);
let twoPlayerOpt = document.createElement("input");
twoPlayerOpt.type = "radio";
twoPlayerOpt.id = "P2";
twoPlayerOpt.name = "players";
radioButtonDiv.appendChild(twoPlayerOpt);
let fourPlayerOpt = document.createElement("input");
fourPlayerOpt.type = "radio";
fourPlayerOpt.id = "P4";
fourPlayerOpt.name = "players";
fourPlayerOpt.checked = true;
radioButtonDiv.appendChild(fourPlayerOpt);
StartButton.addEventListener("click", () => {
    console.log("Hola");
});
