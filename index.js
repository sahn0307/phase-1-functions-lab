// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hqLocation = 42;
    let distance;

    if (location >= hqLocation) {
        distance = location - hqLocation;
    } else {
        distance = hqLocation - location;
    }

    return distance;
}
function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}
function distanceTravelledInFeet(start, end) {
    let distanceTravelled;
    if (end >= start) {
        distanceTravelled = end - start;
    } else {
        distanceTravelled = start - end;
    }
    
    return distanceTravelled * 264;
}

function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(50));
console.log(distanceTravelledInFeet(1, 3));