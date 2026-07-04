const prizes = [
    { text: "FREE HAIRCUT", fillStyle: "#FFD700" },
    { text: "20% OFF", fillStyle: "#ff9800" },
    { text: "10% OFF", fillStyle: "#4CAF50" },
    { text: "FREE COFFEE", fillStyle: "#2196F3" },
    { text: "FREE DRINK", fillStyle: "#9C27B0" },
    { text: "FREE HAIR WAX", fillStyle: "#E91E63" },
    { text: "FREE BEARD TRIM", fillStyle: "#00BCD4" },
    { text: "BETTER LUCK", fillStyle: "#F44336" }
];

let wheel = new Winwheel({
    canvasId: "wheel",
    numSegments: prizes.length,
    outerRadius: 150,
    textFontSize: 16,
    textFillStyle: "#ffffff",
    segments: prizes,
    animation: {
        type: "spinToStop",
        duration: 5,
        spins: 8,
        callbackFinished: showPrize
    }
});

const button = document.getElementById("spinBtn");

button.onclick = function () {

    button.disabled = true;

    wheel.startAnimation();

};

function showPrize(segment){

    document.getElementById("result").innerHTML =
        "🎉 " + segment.text;

    if(segment.text !== "BETTER LUCK"){

        confetti({
            particleCount:200,
            spread:120,
            origin:{y:0.6}
        });

    }

}
