let pencil = document.querySelector('#pencil')
let eraser = document.querySelector('#eraser')
let rect = document.querySelector('#rect')
let line = document.querySelector('#line')

let pencilSize = 5;
let eraserSize = 5;
let rectSize = 5;
let lineSize = 5;
let classElems = ['size1', 'size2', 'size3', 'size4'];
let sizeMap = {
    size1: 5,
    size2: 10,
    size3: 15,
    size4: 20
}

tool.lineWidth = 5;

let options = document.querySelectorAll('.size-box');

pencil.addEventListener('click', function (e) {
  if (cTool == 'pencil') {
    //second click - display flex
    options[0].style.display = 'flex'
  } else {
    //set pencil as ctool, highlight and hide others options
    //set pentil tool properties
    tool.strokeStyle = "hotpink";
    cTool = 'pencil';
    tool.lineWidth = pencilSize;
    options[0].style.border = '2px solid gray'
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = 'none'
    }
  }
})

eraser.addEventListener('click', function (e) {
  if (cTool == 'eraser') {
    //second click - display flex
    options[1].style.display = 'flex'
  } else {
    //set pencil as ctool, highlight and hide others options
    tool.strokeStyle = "white";
    cTool = 'eraser';
    tool.lineWidth = eraserSize;
    options[1].style.border = '2px solid gray';
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = 'none'
    }
  }
})

rect.addEventListener('click', function (e) {
  if (cTool == 'rect') {
    //second click - display flex
    options[2].style.display = 'flex'
  } else {
    //set pencil as ctool, highlight and hide others options
    tool.strokeStyle = "hotpink";
    cTool = 'rect';
    tool.lineWidth = rectSize;
    options[2].style.border = '2px solid gray'
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = 'none'
    }
  }
})

line.addEventListener('click', function (e) {
  if (cTool == 'line') {
    //second click - display flex
    options[3].style.display = 'flex'
  } else {
    //set pencil as ctool, highlight and hide others options
    tool.strokeStyle = "hotpink";
    cTool = 'line';
    tool.lineWidth = lineSize;
    options[3].style.border = '2px solid gray'
    for (let i = 0; i < options.length; i++) {
      options[i].style.display = 'none'
    }
  }
})





//color change

let redColor = document.querySelector('.red')
let greenColor = document.querySelector('.green')
let blueColor = document.querySelector('.blue')

redColor.addEventListener('click', function () {
    if(cTool != 'eraser')
        tool.strokeStyle = 'hotpink'
})

greenColor.addEventListener('click', function () {
    if(cTool != 'eraser')
        tool.strokeStyle = 'green'
})

blueColor.addEventListener('click', function () {
    if(cTool != 'eraser')
        tool.strokeStyle = 'steelblue'
})

//size change

options.forEach(box => {
    box.addEventListener('click', function(e){
        let firstClass = e.target.classList[0];
        if(classElems.includes(firstClass)){
            changeSize(firstClass, box.parentElement);
        }
    })
});

function changeSize(size, element){
    console.log(size);
    let selectedTool = element.getAttribute('id');
    if(selectedTool == 'pencil'){
        pencilSize = sizeMap[size];
    }else if(selectedTool == 'eraser'){
        eraserSize = sizeMap[size];
    }else if(selectedTool == 'rect'){
        rectSize = sizeMap[size];
    }else{
        lineSize = sizeMap[size];
    }
    let cSize = sizeMap[size];
    console.log(cSize);
    tool.lineWidth = cSize;
    console.log(tool.lineWidth);
}
