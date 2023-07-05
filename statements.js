var mouseEvent = "empty"

canvas = document.getElementById("myCanva")
ctx = canvas.getContext("2d")

var color = document.getElementById("input_color")
var width_line = document.getElementById("input_width")

var last_position_x, last_position_y

canvas.addEventListener("mousedown",my_mousedown)

function my_mousedown() {
    mouseEvent = "mousedown"
}


canvas.addEventListener("mouseup",my_mouseup)

function my_mouseup() {
    mouseEvent = "mouseUP"
}


canvas.addEventListener("mouseleave",my_mouseleave)

function my_mouseleave() {
    mouseEvent = "mouseleave"
}


canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e) {
    current_position_x = e.clientX - offsetLeft
    current_position_y = e.clientY - offsetTop

    if (mouseEvent == "mouseDown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width_line
        ctx.moveTo(last_position_x, last_position_y)
        ctx.lineTo(current_position_x, current_position_y)
        ctx.stroke()
    }

    last_position_x = current_position_x
    last_position_y = current_position_y
}

canvas.addEventListener("touchmove", my_touchmove)

function my_touchmove(e) {
    current_position_x = e.touches[0].clientX - canvas.offsetLeft
    current_position_y = e.touches[0].clientY - canvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width_line
    ctx.moveTo(last_position_x, last_position_y)
    ctx.lineTo(current_position_x, current_position_y)
    ctx.stroke()

    last_position_x = current_position_x
    last_position_y = current_position_y
}