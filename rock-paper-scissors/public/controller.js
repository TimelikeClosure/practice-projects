const moveMap = [{name: "Nothing", action: "doesn't affect"}, {name: "Rock", action: "crushes"}, {name: "Paper", action: "covers"}, {name: "Scissors", action: "cuts"}];
const getStatusMessageMap = [
    function(){
        return `You are playing ${moveMap.slice(1).reduce((message, move) => {
            if (message === ""){
                return move.name;
            }
            return `${message}-${move.name}`;
        }, "")} against a computer opponent. Pick one of the moves above to begin.`;
    },
    function(user, comp){
        return `You choose ${moveMap[user].name}. Your opponent chooses ${moveMap[comp].name}. ${moveMap[comp].name} ${moveMap[comp].action} ${moveMap[user].name}! Try again!`;
    },
    function(user, comp){
        return `You choose ${moveMap[user].name}. Your opponent chooses ${moveMap[comp].name}. ${moveMap[user].name} ${moveMap[user].action} ${moveMap[comp].name}! You win!`;
    },
    function(user, comp){
        return `You choose ${moveMap[user].name}. Your opponent also chooses ${moveMap[comp].name}. It's a draw!`;
    }
];

function updateView(){
    const currentState = getRPSState();
    const statusMessage = getStatusMessageMap[currentState.round](currentState.user, currentState.comp);
    document.getElementById('status_msg').innerText = statusMessage;
    let moveContainer = document.getElementById('moves');
    for (let i = moveContainer.children.length - 1; i >= 0; i--){
        moveContainer.removeChild(moveContainer.children[i]);
    }
    if (currentState.round){
        const button = document.createElement("button");
        button.innerText = "Next Round";
        button.classList.add('reset');
        button.addEventListener("click", resetGame);
        moveContainer.appendChild(button);
    } else {
        moveMap.slice(1).forEach(function(move){
            const button = document.createElement("button");
            button.innerText = move.name;
            button.type = "button";
            button.value = move.name;
            button.addEventListener("click", makeMove);
            moveContainer.appendChild(button);
        });
    }
}

function makeMove(){
    processRound(Number(moveMap.map(function(move){
        return move.name;
    }).indexOf(this.value)));
    updateView();
}

function resetGame(){
    nextRound();
    updateView();
}

document.addEventListener("DOMContentLoaded", updateView);
