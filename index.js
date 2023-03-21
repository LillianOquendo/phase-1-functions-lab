

function distanceFromHqInBlocks(blocks) {
    if (blocks < 42) {
        return (42 - blocks);
    }
    else {
        return (blocks - 42);
    }
}

function distanceFromHqInFeet(blocks) {
    if (blocks < 42) {
        return ((42 - blocks) * 264);
    }
    else {
        return ((blocks - 42) * 264);
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    }
    else {
        return (destination - start) * 264;
    }
}


function calculatesFarePrice(start, destination) {
    //change cost to distance for readability  
    let distance = distanceTravelledInFeet(start, destination);
    //  console.log(distance);
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        let disDistance = distance - 400;
        return disDistance * .02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }
}
