function merge(collection_1, collection_2, collection_3) {
    // collection_1 is already sorted -> copy collection_1 to new array "Merged"
    let Merged: number[] = [...collection_1];

    // merge collection_2
    for(let i = 0 ; i < collection_2.length ; i++) {
        // check if array "Merged" is empty, so that it can start looping
        if(Merged.length == 0) {
            Merged.push(collection_2[i]);
            continue;
        }
        for(let j=0 ; j<Merged.length ; j++) {
            // insert elements from collection_2 at the first number index that is larger than the element
            if(collection_2[i] <= Merged[j]) {
                Merged.splice(j, 0, collection_2[i]);
                break;
            }
            // push the largest number to the back when there is no larger to check
            if(j == Merged.length - 1) {
                Merged.push(collection_2[i]);
                break;
            }
        }
    }

    // merge collection_3
    for(let i = collection_3.length - 1 ; i >= 0 ; i--) {
        // check if array "Merged" is empty, so that it can start looping
        if(Merged.length == 0) {
            Merged.push(collection_3[i]);
            continue;
        }
        for(let j=0 ; j<Merged.length ; j++) {
            // insert elements from collection_3 at the first number index that is larger than the element
            if(collection_3[i] <= Merged[j]) {
                Merged.splice(j, 0, collection_3[i]);
                break;
            }
            // push the largest number to the back when there is no larger to check
            if(j == Merged.length - 1) {
                Merged.push(collection_3[i]);
                break;
            }
        }
    }

    return Merged;
}

export default merge;