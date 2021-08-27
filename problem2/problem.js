let wrapper = document.getElementById("wrapper").offsetHeight;
let box = document.getElementById("box");
let animateDirection = 0; 

StartAnimation = function() {
   
    let PositionLeft = box.offsetLeft;
    let PositionTop = box.offsetTop;

    if ((PositionLeft + 100) >= screen.width || (PositionTop + 100) >= wrapper) {
        animateDirection = 1;
    } else if (box.offsetLeft < 0) {
        animateDirection = 0;
    }
    console.log(animateDirection)

    if (animateDirection === 0) {
        PositionLeft = PositionLeft + 10;
        PositionTop = PositionTop + 10;
    } 
    else {
        PositionLeft = PositionLeft - 10;
        PositionTop = PositionTop - 10;
    }

    box.style.left = PositionLeft + "px";
    box.style.top = PositionTop + "px";

    setTimeout(function () { StartAnimation() }, 1000);
}

setTimeout(function () { 
	StartAnimation();
}, 1000); 