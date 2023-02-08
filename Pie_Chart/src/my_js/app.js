// Function untuk membuat chart atau diag - ram
window.buatDiagram = function (warnaPoint, warna, persen, width, height, x, y) {


    let wadah = document.createElement('div');
    wadah.style.position = "absolute";
    wadah.style.width = (width*3/4)+"px";
    wadah.style.height = (height*3/4)+"px";
    wadah.style.left = x+"px";
    wadah.style.top = y+"px";
    wadah.style.borderRadius = "50%";
    wadah.style.background = warnaPoint;

    let myChart = document.createElement('div');
    myChart.style.position = "absolute";
    myChart.style.width = width+"px";
    myChart.style.height = height+"px";
    myChart.style.left = -(width*1/8)+"px";
    myChart.style.top = -(height*1/8)+"px";
    myChart.style.borderRadius = "50%";
    myChart.style.background = "conic-gradient(" + warna + " 0% " + persen + ", transparent " + persen + " 100%)";

    let myText = document.createElement('h3');
    myText.innerHTML = persen;
    myText.style.position = "absolute";
    myText.style.top = -(height/2)+"px";
    myText.style.width = "100%";
    myText.style.textAlign = "center";
    myText.style.color = warnaPoint;
    myText.style.fontSize = (height*1/8)+"px";

    wadah.appendChild(myChart);
    wadah.appendChild(myText);
    return wadah;

}

let diagramA = buatDiagram("#008080", "#00ffff", "60%", 50, 50, (innerWidth-50)/2, 200);

document.body.appendChild(diagramA);