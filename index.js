//DICE ROLLER PROGRAM

const stats = [0,0,0,0,0,0]; 

let rollCount = 0;

function rollDice(){

    rollCount++;

    document.getElementById("rollCount").textContent = "Rolls: " + rollCount;

    function drawChart(){

    const canvas = document.getElementById("statsChart");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);

    const barWidth = 50;
    const maxHeight = 150;

    const maxStat = Math.max(...stats,1);

    for(let i = 0; i < stats.length; i++){

        const barHeight = (stats[i] / maxStat) * maxHeight;

        ctx.fillStyle = "steelblue";
        ctx.fillRect(i * 60 + 20, 180 - barHeight, barWidth, barHeight);

        ctx.fillStyle = "black";
        ctx.fillText(i+1, i * 60 + 40, 195);

        ctx.fillText(stats[i], i * 60 + 40, 170 - barHeight);
    }
     }
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];
    
    diceImages.innerHTML ="Rolling...";

    for(let i = 0; i <numofDice; i++){
        const value =Math.floor(Math.random() * 6) + 1;
        values.push(value);
        stats[value - 1]++;
        images.push(`<img src="dice_images/dice${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

    drawChart();
    }
