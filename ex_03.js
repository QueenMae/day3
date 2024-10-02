function fillBus(peopleAtBusStops, busSeats) {

    let currentCapacity = 0; 

    let i = 0;
    while (i < peopleAtBusStops.length) {
        currentCapacity += peopleAtBusStops[i];

        if (currentCapacity >= busSeats) {
            return i; 
        }
        i++;
    }

    return -1
}

console.log(fillBus([1, 8, 10, 1], 12));
