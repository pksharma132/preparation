/** bombed this in a interview */

function shuffleArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

console.log(shuffleArray([5,4,3,2,1]));

