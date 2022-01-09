let body = document.querySelector('body')

let drawingMode = false

let iX, iY, fX, fY
let boardTop = canvasBoard.getBoundingClientRect().top
let boardLeft = canvasBoard.getBoundingClientRect().left
body.addEventListener('mousedown', function (e) {
    if(cTool == 'sticky'){
        drawingMode = false;
        return;
    }
    
  iX = e.clientX - boardLeft
  iY = e.clientY - boardTop

  
    if (cTool == 'pencil' || cTool == 'eraser' ) {
    tool.beginPath()
    tool.moveTo(iX, iY)
    drawingMode = true
  }
})

body.addEventListener('mousemove', function (e) {
  if (!drawingMode) {
    return
  }

  if (cTool == 'pencil' || cTool == 'eraser') {
    fX = e.clientX - boardLeft
    fY = e.clientY - boardTop

    tool.lineTo(fX, fY)
    tool.stroke()
    iX = fX
    iY = fY
  }
})

body.addEventListener('mouseup', function (e) {
  fX = e.clientX + boardLeft
  fY = e.clientY - boardTop

  let width = fX - iX
  let height = fY - iY
  if (cTool == 'rect') {
    tool.strokeRect(iX, iY, width, height)
  } else if (cTool == 'line') {
    tool.beginPath()
    tool.moveTo(iX, iY)
    tool.lineTo(fX, fY)
    tool.stroke()
  } else {
    drawingMode = false
  }
})
