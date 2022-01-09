let stickyBtn = document.querySelector("#sticky");
stickyBtn.addEventListener('click', function (e) {
    // cTool = 'sticky';
    let sticky = document.createElement("div");
    sticky.setAttribute("class", "sticky");
    sticky.innerHTML = `
            <div class="sticky">
                <div class="navbar">
                    <div class="minimize"></div>
                    <div class="close"></div>
                </div>
                <textarea class="textarea"></textarea>
            </div>
        `;
    body.appendChild(sticky);

    let lastTool = cTool;
    //MOVABLE STICKY
    sticky.addEventListener('mousedown', function(e){
        cTool = 'sticky';
        drawingMode = false;
        window.addEventListener('mousemove', moveSticky, true);
    }, false);
    body.addEventListener('mouseup', function(e){
        window.removeEventListener('mousemove', moveSticky, true );
        drawingMode = false;
        cTool = lastTool;
    }, false);

    function moveSticky(e){
        sticky.style.position = 'absolute';
        sticky.style.top = e.clientY + 'px';
        sticky.style.left = e.clientX + 'px';
    }

    let minimize = sticky.querySelector(".minimize");
    let close = sticky.querySelector(".close");
    let textArea = sticky.querySelector(".textarea");
    let isClosed = false;
    minimize.addEventListener('click', function (e) {
        if (! isClosed) {
            textArea.style.display = "none";
        } else {
            textArea.style.display = "block";
        } isClosed = ! isClosed;
    });

    close.addEventListener('click', function (e) {
        sticky.remove();
    })
})
