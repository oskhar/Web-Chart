// Function untuk membuat chart atau diag - ram
window.buatDiagram = function (warna, persen, width, height, x, y) {

    let myChart = document.createElement('div');
    myChart.style.position = "absolute";
    myChart.style.width = width+"px";
    myChart.style.height = height+"px";
    myChart.style.left = x+"px";
    myChart.style.top = y+"px";
    myChart.style.background = "conic-gradient(" + warna + " 0% " + persen + ", transparent " + persen + " 100%)";
    document.body.appendChild(myChart);

}