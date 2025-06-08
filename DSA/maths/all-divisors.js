function allDivisors(num) {
    for(let i = 0; i <= Math.sqrt(num); i++) {
        if ( num % i === 0) {
            console.log(i);
            console.log( num / i);
        };
    
    }
}

console.log(allDivisors(12));
console.log(allDivisors(50))
n