// Red ghost AI
console.log("stoopid'fe0fn");
setInterval(function() {
    console.log("insides");
    if (redInMotion || redInRotation) return;
    var newPosition = [redCurrentPosition[0], redCurrentPosition[1]];
    switch(redCurrentHeadingCnt){
        case 0:
            newPosition[0] += 1;
            redUnitMotion = [redStepSize, 0];
            break;
        case 1:
            newPosition[1] += 1;
            redUnitMotion = [0, redStepSize];
            break;
        case 2:
            newPosition[0] -= 1;
            redUnitMotion = [-redStepSize, 0];
            break;
        case 3:
            newPosition[1] -= 1;
            redUnitMotion = [0, -redStepSize];
            break;
        default:
            console.log("ERROR, INVALID CASE");
    }

    if (newPosition[0] >= maze.sizeX) {
        redCurrentPosition[0] = -1.;
        redAnimateToPosition[0] = 0.;
        redAnimateToPosition[1] = redCurrentPosition[1];
        redInMotion = true;
    } else if (newPosition[0] < 0.) {
        redCurrentPosition[0] = maze.sizeX;
        redAnimateToPosition[0] = maze.sizeX - 1.;
        redAnimateToPosition[1] = redCurrentPosition[1];
        redInMotion = true;
    } else if (newPosition[1] >= maze.sizeY) {
        redCurrentPosition[1] = -1.;
        redAnimateToPosition[0] = redCurrentPosition[0];
        redAnimateToPosition[1] = 0.;
        redInMotion = true;
    } else if (newPosition[1] < 0.) {
        redCurrentPosition[1] = maze.sizeY;
        redAnimateToPosition[0] = redCurrentPosition[0];
        redAnimateToPosition[1] = maze.sizeY - 1.;
        redInMotion = true;
    } else if (maze.data[newPosition[0]][newPosition[1]] != 1) {
        redAnimateToPosition = newPosition;
        redInMotion = true;
    } else {
        leftOrRight = Math.floor(Math.random()*2);
        redInRotation = true;
        if(leftOrRight == 0) {
            redTargetHeadingCnt = (redCurrentHeadingCnt + 1);
            redUnitRotation = redStepSize;
        } else {
            redTargetHeadingCnt = (redCurrentHeadingCnt - 1);
            redUnitRotation = -redStepSize;
        }
    }
}, 50);