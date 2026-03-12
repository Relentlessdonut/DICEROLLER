//DICE ROLLER PROGRAM

const stats = [0,0,0,0,0,0]; 

let rollCount = 0;

let totalDicedRolled = 0;

function rollDice(){

    rollCount++;

    document.getElementById("rollCount").textContent = "Rolls: " + rollCount;

    function drawChart(){
     
    const canvas = document.getElementById("statsChart");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.moveTo(10,180);
    ctx.lineTo(380,180);
    ctx.stroke();

    const barWidth = 50;
    const maxHeight = 150;

    const maxStat = Math.max(...stats,1);

    const percentages =stats.map(stat =>
        ((stat / totalDicedRolled) * 100).toFixed(1)
    );

    for(let i = 0; i < stats.length; i++){

        const barHeight = (stats[i] / maxStat) * maxHeight;

        const colors = ["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ff924c"];
        ctx.fillStyle = colors[i];
        ctx.fillRect(i * 60 + 20, 180 - barHeight, barWidth, barHeight);

        ctx.fillStyle = "black";
        ctx.fillText(i+1, i * 60 + 40, 195);

        ctx.fillText(stats[i] + " (" + percentages[i] + "%)", i * 60 + 15, 170 - barHeight);
    }
     }
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];
    
    diceImages.innerHTML ="Rolling...";

    for(let i = 0; i <numOfDice; i++){
        const value =Math.floor(Math.random() * 6) + 1;
        totalDicedRolled++;
        values.push(value);
        stats[value - 1]++;
        images.push(`<img src="dice_images/dice${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `You rolled: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

    drawChart();
    }
