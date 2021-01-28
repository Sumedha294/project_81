canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 40 ,0,2*Math.PI);
ctx.strokeStyle();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //Additional Activity start
    color = document.getElementById("color").value;
    width_of_line = document.getElementById(width_of_line).value;
    //Additional Activity ends

    mouse_x = e.client - canvas.offsetLeft;
    mouse_y = e.client - canvas.offsetTop;

    console.log("X =" + mouse_x + "Y = " + mouse_y);
    circle(mouse_x , mouse_y);
}

function circle(mouse_x, mouse_y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(moyse_x, moyse-y, 40 ,0 ,2*Math.PI);
    ctx.strokeStyle();
}





function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}