// Function untuk membuat chart
window.buatDiagram = function (warnaPoint, warna, persen, width, height, x, y) {

    let wadah = document.createElement('div');
    wadah.style.position = "absolute";
    wadah.style.width = (width*3/4)+"px";
    wadah.style.height = (height*3/4)+"px";
    wadah.style.left = x+"px";
    wadah.style.top = y+"px";
    wadah.style.borderRadius = "50%";
    wadah.style.background = warnaPoint;

    let myDiagram = document.createElement('div');
    myDiagram.style.position = "absolute";
    myDiagram.style.width = width+"px";
    myDiagram.style.height = height+"px";
    myDiagram.style.left = -(width*1/8)+"px";
    myDiagram.style.top = -(height*1/8)+"px";
    myDiagram.style.borderRadius = "50%";
    myDiagram.style.background = "conic-gradient(" + warna + " 0% " + persen + ", transparent " + persen + " 100%)";

    let myText = document.createElement('h3');
    myText.innerHTML = persen;
    myText.style.position = "absolute";
    myText.style.width = "100%";
    myText.style.textAlign = "center";
    myText.style.color = warnaPoint;
    myText.style.top = -(height/2)+"px";
    myText.style.fontSize = (height*1/8)+"px";

    wadah.appendChild(myDiagram);
    wadah.appendChild(myText);
    return wadah;

}

// Contoh data
let erey = [
    ["#008080", "#00ffff", "60%", 100, 100, (innerWidth-100)/2, 200],
    ["#008080", "#00ffff", "60%", 100, 100, 300, 200],
    ["#008080", "#00ffff", "60%", 100, 100, 1200, 200],
    ["#008080", "#00ffff", "60%", 100, 100, 500, 200]
];

var diagram = [];

// Jalankan function
for (let i = 0; i < erey.length; i++) {
    diagram[i] = buatDiagram(erey[i][0], erey[i][1], erey[i][2], erey[i][3], erey[i][4], erey[i][5], erey[i][6]);
    document.body.appendChild(diagram[i]);
    
}