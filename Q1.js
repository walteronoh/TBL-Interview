const paths = [["Nairobi", "Nakuru"], ["Nakuru", "Eldoret"], ["Eldoret", "Kisumu"]];

// Meaning Destination City is the last city
// Then we are going to get the final index of the array.
// The last index of array[x][i] should match the first index of incoming array

function getDestination() {
    let destinationCity = paths[0][1];
    let index = 1;

    // Weird and temporary fix
    paths.push([]);

    while(index <= paths.length && (destinationCity === paths[index][0])) {
        destinationCity = paths[index][1];
        index++;
    }

    return destinationCity;
}

getDestination();
