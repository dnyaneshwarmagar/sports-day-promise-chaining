function OpeningCeremony(callbackFnc) {
    setTimeout(() => {
        console.log("Let the games begin");
        let score = { red: 0, blue: 0, green: 0, yellow: 0 };
        console.log("Initial Score: ", score);
        callbackFnc(score,LongJump);
    }, 1000);
}

function Race100M(score,callbackFnc) {
    setTimeout(() => {
        console.log("Race 100M started");
        console.log("Previous score: ",score);
        let redTime = Math.floor(Math.random() * 6) + 10;
        let blueTime = Math.floor(Math.random() * 6) + 10;
        let greenTime = Math.floor(Math.random() * 6) + 10;
        let yellowTime = Math.floor(Math.random() * 6) + 10;

        let times = { red: redTime, blue: blueTime, green: greenTime, yellow: yellowTime };

        let sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);

        score[sortedColors[0]] += 50;
        score[sortedColors[1]] += 25;

        console.log("Updated Score: ", score);
        console.log(`${sortedColors[0]} won the Race 100M`);

        callbackFnc(score,HighJump);
    }, 3000);
}

function LongJump(score,callbackFnc) {
    setTimeout(() => {
        console.log("Long Jump started");
        console.log("Previous score: ",score);

        let color = ['red', 'yellow', 'green', 'blue'][Math.floor(Math.random() * 4)];
        console.log('color:', color)
        score[color] += 150;

        console.log("Updated Score: ", score);
        console.log(`${color} won the Long Jump`);

        callbackFnc(score,AwardCeremony);
    }, 2000);
}

function HighJump(score,callbackFnc) {
    console.log("High Jump started");
    console.log("Previous score: ",score);

    let userInput = prompt("What colour secured the highest jump?");
    if (userInput && score.hasOwnProperty(userInput.toLowerCase())) {
        score[userInput.toLowerCase()] += 100;
        console.log("Updated Score: ", score);
        console.log(`${userInput} won the High Jump`);
        callbackFnc(score);
    } else {
        console.log("Event was cancelled");
        callbackFnc(score);
    }
}

function AwardCeremony(score) {
    console.log("Award Ceremony started");
    console.log('Final score:', score)
    let sortedScores = Object.entries(score).sort((a, b) => b[1] - a[1]);
    console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
    console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
    console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
}

// Start the event
OpeningCeremony(Race100M);
