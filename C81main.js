canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(200 , 200 , 100 , 2 ,2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mouse_down);

function mouse_down(e) {
    color = document.getElementById("color").value;
    console.log(color);

    mouse_X = e.clientX - canvas.offsetLeft;
    mouse_Y = e.clientY - canvas.offsetTop;

    console.log("X =" + mouse_X + ", Y =" + mouse_Y);

    circle(mouse_X,mouse_Y);
}

function circle(mouse_X,mouse_Y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.arc(mouse_X,mouse_Y,40,0,2*Math.PI);
    ctx.stroke();
}
